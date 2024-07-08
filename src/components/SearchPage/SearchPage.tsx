import { ChangeEvent, Component, ReactNode } from 'react';
import { TopSection } from '../TopSection/TopSection';
import { BottomSection } from '../BottomSection/BottomSection';

interface SearchPageState {
  inputResult: string;
}

export class SearchPage extends Component<
  Record<string, never>,
  SearchPageState
> {
  state = {
    inputResult: '',
  };
  handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    this.setState({
      inputResult: e.target.value,
    });
  };

  handlerSearch = () => {
    console.log(this.state.inputResult);
  };

  render(): ReactNode {
    return (
      <main>
        <TopSection
          handlerChange={this.handlerChange}
          handlerSearch={this.handlerSearch}
        />
        <BottomSection />
      </main>
    );
  }
}
