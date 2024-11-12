import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Whoops, something went wrong!</h1>
          <p>
            We're sorry for the inconvenience. Please try reloading the page or
            contact our support team.
          </p>
          <button onClick={() => window.location.reload()}>Reload</button>
          <a href="mailto:support@example.com">Contact Support</a>
          <details>
            <summary>View Error Details</summary>
            <pre>{this.state.error && this.state.error.toString()}</pre>
            <pre>
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
