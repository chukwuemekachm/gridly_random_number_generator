import * as React from "react";

import GlobalStyles from "./styles/_global_styles";
import { NavBar } from "./NavBar/NavBar";
import { HeroBanner } from "./HeroBanner/HeroBanner";
import { InfoBanner } from "./InfoBanner/InfoBanner";
import { Footer } from "./Footer/Footer";
import { Modal } from "./Modal/Modal";
import { getNumbers, generateNumbers } from '../api';

export interface AppProps { }

export interface AppState {
  displayModal: boolean;
  displayNumbers: boolean;
  count: number;
  numbers: number[];
  sortNumbers: number[];
  sort: string;
}

export class App extends React.Component<AppProps, AppState> {
  state = {
    displayModal: false,
    displayNumbers: true,
    count: 0,
    numbers: [],
    sortNumbers: [],
    sort: 'DESC',
  };

  handleToggleModal = () => this
    .setState(({ displayModal }) => ({ displayModal: !displayModal }));

  handleDisplayNumbersModal = async () => {
    const numbers = await getNumbers();
    this.handleToggleModal();
    return this.setState({ displayNumbers: true, numbers });
  }

  handleDisplayGenerateNumbersModal = () => {
    this.handleToggleModal();
    return this.setState({ displayNumbers: false });
  }

  handleNumbersSort = () => {
    const { sort, numbers } = this.state;
    if (sort === 'DESC') {
      return this.setState({
        sort: 'ASC',
        sortNumbers: numbers.reverse(),
      });
    }
    return this.setState({
      sort: 'DESC',
      sortNumbers: numbers.sort(),
    });
  }

  handleGenerateNumbers = async () => {
    let { count } = this.state;
    if (count > 500) return false;
    const numbers = await generateNumbers(count);

    return this.setState({
      numbers,
      displayNumbers: true,
    });
  }

  handleChange = ({ target: { value } }) => this.setState({ count: value });

  render() {
    const { displayModal, count, displayNumbers, numbers, sort } = this.state;

    return (
      <div>
        <GlobalStyles />
        <NavBar
          handleDisplayNumbersModal={this.handleDisplayNumbersModal}
        />
        <HeroBanner
          handleDisplayGenerateNumbersModal={this.handleDisplayGenerateNumbersModal}
        />
        {
          displayModal
            ? <Modal
              handleToggleModal={this.handleToggleModal}
              handleGenerateNumbers={this.handleGenerateNumbers}
              handleChange={this.handleChange}
              count={count}
              displayNumbers={displayNumbers}
              numbers={numbers}
              handleDisplayGenerateNumbersModal={this.handleDisplayGenerateNumbersModal}
              handleDisplayNumbersModal={this.handleDisplayNumbersModal}
              handleNumbersSort={this.handleNumbersSort}
              sort={sort}
            />
            : ''
        }
        <InfoBanner />
        <Footer />
      </div>
    );
  }
}

export default App;
