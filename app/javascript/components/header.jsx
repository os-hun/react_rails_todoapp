import React from "react";

let margin = {
  marginTop: '0',
  marginBottom: '30px',
  padding: '15px'
};

class Header extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
  //  <Header title='... で渡された値を表示
    return(
      <div>
        <h1 className="siimple--color-white siimple--bg-dark" style={margin}>{this.props.title}</h1>
      </div>
    )
  }
}
export default Header;