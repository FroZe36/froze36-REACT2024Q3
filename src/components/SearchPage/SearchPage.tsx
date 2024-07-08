import { ChangeEvent, Component, ReactNode } from 'react';
import { TopSection } from '../TopSection/TopSection';
import { BottomSection } from '../BottomSection/BottomSection';
import { StarshipData, StarWarsService } from '../../api/StarWarsService';
import styleSearchPage from './SearchPage.module.scss';
const { main } = styleSearchPage;
interface SearchPageState {
  inputResult: string;
  loading: boolean;
  data: StarshipData | null;
  searchQuery: string;
}

export class SearchPage extends Component<
  Record<string, never>,
  SearchPageState
> {
  state = {
    inputResult: '',
    loading: false,
    data: null,
    searchQuery: '',
  };

  starWarsService = new StarWarsService();
  async componentDidMount() {
    const data = await this.starWarsService.getResponse();
    this.setState((prevState) => {
      return { loading: !prevState.loading };
    });
    if (data) {
      this.setState({
        data: data,
      });
    }
  }
  handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputResult: e.target.value,
    });
  };

  handlerSearch = () => {
    console.log(this.state.inputResult);
  };

  render(): ReactNode {
    return (
      <main className={main}>
        <TopSection
          handlerChange={this.handlerChange}
          handlerSearch={this.handlerSearch}
        />
        <BottomSection
          loadingState={this.state.loading}
          data={this.state.data}
        />
      </main>
    );
  }
}
