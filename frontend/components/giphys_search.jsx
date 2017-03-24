import React from 'react';
import GiphyItem from './giphy_item';
import EnhanceWithClickOutside from 'react-click-outside';

class GiphysSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = { searchTerm: "", giphysOpen: this.props.giphysOpen };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showGiphysSearch = this.showGiphysSearch.bind(this);
    this.selectGiphy = this.selectGiphy.bind(this);

    this.props.fetchSearchGiphys("gif");
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  selectGiphy (giphy) {
    return () => {
      this.props.addGiphy(giphy);
      this.props.toggleGiphysSearch();
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.giphysOpen !== this.props.giphysOpen) {
      this.setState({ giphysOpen: nextProps.giphysOpen });
    }
  }

  handleClickOutside () {
    console.log('handling click outside');
    this.props.toggleGiphysSearch();
  }

  showGiphysSearch () {
    const giphys = this.props.giphys.map((giphy, idx) =>
      <GiphyItem key={idx}
                 giphyUrl={giphy.images.fixed_height.url}
                 selectGiphy={this.selectGiphy}/>);

    if (this.state.giphysOpen) {
      return (
        <form id="giphy-search" onSubmit={this.handleSubmit}>
          <img id="giphy-logo"
            src="http://res.cloudinary.com/dwqeotsx5/image/upload/v1490215417/Giphy_Logo_lobqbg.png" />
          <div id="giphys-holder">
            <ul id="giphys-list">
              { giphys.slice(0, 6) }
            </ul>
            <ul id="giphys-list">
              { giphys.slice(6, 12) }
            </ul>
            <ul id="giphys-list">
              { giphys.slice(12, 18) }
            </ul>
          </div>
          <input type="text"
            id="giphy-input"
            onChange={this.handleChange}
            value={this.state.searchTerm}
            placeholder="Search Giphys"
            />
          <input id="hidden" type="submit" />
        </form>
      );
    }
  }

  render () {
    return (
      <div id="giphys-search-holder">
        { this.showGiphysSearch() }
      </div>
    );
  }
}

export default EnhanceWithClickOutside(GiphysSearch);
