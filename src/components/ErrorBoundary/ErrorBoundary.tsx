import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export class ErrorBoundary extends Component<
  { children: ReactNode },
  { error: boolean }
> {
  state = {
    error: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render(): ReactNode {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}
