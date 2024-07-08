import { ChangeEvent, Component, ReactNode } from 'react';
import { TopSection } from '../TopSection/TopSection';
import { BottomSection } from '../BottomSection/BottomSection';
import {
  StarshipShortProperties,
  StarWarsService,
} from '../../api/StarWarsService';
import styleSearchPage from './SearchPage.module.scss';
const { main } = styleSearchPage;
interface SearchPageState {
  inputResult: string;
  loading: boolean;
  data: StarshipShortProperties[];
}

export class SearchPage extends Component<
  Record<string, never>,
  SearchPageState
> {
  state = {
    inputResult: '',
    loading: false,
    data: [],
  };

  async componentDidMount() {
    const savedResult = localStorage.getItem('savedResult') ?? '';
    this.setState({
      inputResult: savedResult,
    });
    await this.setStateResponse(savedResult);
  }

  setStateResponse = async (searchQuery: string) => {
    this.setState({
      loading: true,
    });
    const data = await StarWarsService.getResponse(searchQuery);
    if (data) {
      this.setState({
        data: data,
        loading: false,
      });
    }
  };

  handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputResult: e.target.value.trim(),
    });
  };

  handlerSearch: () => void = async () => {
    const { inputResult } = this.state;
    localStorage.setItem('savedResult', inputResult);
    await this.setStateResponse(inputResult);
  };

  render(): ReactNode {
    const { data, loading, inputResult } = this.state;
    return (
      <main className={main}>
        <TopSection
          handlerChange={this.handlerChange}
          handlerSearch={this.handlerSearch}
          valueResult={inputResult}
        />
        <BottomSection loadingState={loading} data={data} />
      </main>
    );
  }
}
