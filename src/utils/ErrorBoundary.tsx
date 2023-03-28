import React, { ErrorInfo } from 'react';

type TProps = {
  children: JSX.Element;
  fallback: JSX.Element;
};

type TState = {
  error: Error | null;
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
