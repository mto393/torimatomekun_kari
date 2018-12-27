import React, { Component } from 'react';
import Container from './Container';
import HistoryTable from './HistoryTable';
import {CreateButton} from './Button';
import SubTitle from './SubTitle';

var tableTtlTxt = ['タイトル', '日程', ''];

var tableData = [
  {"id": "1", "title": "送別会", "date": "2018/11/1(木)"},
  {"id": "2", "title": "2018年忘年会", "date": "2018/12/21(金)"},
  {"id": "3", "title": "2019年新年会", "date": "2019/1/9(水)"}
];

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      tableData: [],
      error: null
    };
  }

  click =(e)=> {
    e.preventDefault();
    window.location.href = "/create";
  }

  componentDidMount(){
    /*  とりまとめデータを取得する  */
    /*
    fetch('https://torimatomekun/history')
    .then(response => response.json())
    .then(data =>
      this.setState({ 
        tableData: data.tData,
        isLoaded: true
      })
    )
    .catch(error =>
      this.setState({
        isLoaded: true
        //error
      })
    )
    */
  }

  render() {
    /*
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      */
      return(
        <Container>
          <CreateButton onClick={e => this.click(e)} primary>新規作成</CreateButton>
          <SubTitle>とりまとめ履歴</SubTitle>
          <HistoryTable title={tableTtlTxt} data={tableData}></HistoryTable>
        </Container>
      )
      /*
    }
    */
  }
}

export default Home;