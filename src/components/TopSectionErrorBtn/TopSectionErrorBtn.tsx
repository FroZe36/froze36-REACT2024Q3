import { PureComponent, ReactNode } from 'react';

export class TopSectionErrorBtn extends PureComponent<
  { className: string },
  { error: boolean }
> {
  state = {
    error: false,
  };

  handleClick = () => {
    this.setState({
      error: true,
    });
  };

  render(): ReactNode {
    const { className } = this.props;
    if (this.state.error) {
      throw new Error(
        'The error eject by pressed the button, reload the page to continue!'
      );
    }
    return (
      <button className={className} type="button" onClick={this.handleClick}>
        Throw error
      </button>
    );
  }
}
