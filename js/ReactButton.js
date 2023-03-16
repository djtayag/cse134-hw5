class ReactButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(state => ({ count: state.count + 1 }));
    }

    render() {
      return (
        <button
            style={{
              padding: '8px 16px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
            onClick={this.handleClick}
        >
          Times Clicked: {this.state.count}
        </button>
      );
    }
  }

  ReactDOM.render(<ReactButton/>, document.getElementById('root'));