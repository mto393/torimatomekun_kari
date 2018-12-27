import React, { Component } from 'react';
import Container from './Container';
import Contents from './Contents';
import Content from './Content';
import TextArea from './TextArea';
import SubTitle from './SubTitle';
import SectionTitle from './SectionTitle';
import { CreateButton } from './Button';
import { Section, SectionLeft, SectionRight } from './Section';
import Form from './Form';

class Create extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      date: '',
      content: '',
      guest: '',
      preview: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onGuestChange = this.onGuestChange.bind(this);
    this.onPreviewChange = this.onPreviewChange.bind(this);
  }

  componentDidMount(){
    var query = window.location.search;
    if(query){
      /* とりまとめデータ取得 */
      /*
      fetch('https://torimatomekun/data' + query)
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
    }else{
    }
  }

  onSubmit(e){
    e.preventDefault();

    fetch('https://torimatomekun/posts', {
        method: 'POST',
        headers : new Headers(),
        body: JSON.stringify({
          tittle: this.state.title,
          date: this.state.date,
          content: this.state.content,
          guest: this.state.guest
        })
    }).then((response) => response.json())
    .then((data) =>  console.log(data))
    .catch((error)=>console.log(error))
  }
  onTitleChange(e){
    this.setState({ title: e.target.value });
  }
  onDateChange(e){
    this.setState({ date: e.target.value });
  }
  onContentChange(e){
    this.setState({ content: e.target.value });
  }
  onGuestChange(e){
    this.setState({ guest: e.target.value });
  }
  onPreviewChange(e){
    this.setState({ preview: e.target.value });
  }

  render() {
    return(
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Section>
            <SubTitle>{this.props.type == "create" ? "とりまとめ新規作成" : "とりまとめ編集"}</SubTitle>
            <SectionLeft>
              <SectionTitle>タイトル</SectionTitle>
                <TextArea value={this.state.title} onChange={this.onTitleChange}></TextArea>
              <SectionTitle>日程</SectionTitle>
                <TextArea value={this.state.date} onChange={this.onDateChange} Height="75px"></TextArea>
              <SectionTitle>内容</SectionTitle>
                <TextArea value={this.state.content} onChange={this.onContentChange} Height="132px"></TextArea>
              <SectionTitle>参加者</SectionTitle>
                <TextArea value={this.state.guest} onChange={this.onGuestChange} Height="132px"></TextArea>
            </SectionLeft>
            <SectionRight>
                <SectionTitle>プレビュー</SectionTitle>
                <TextArea value={this.state.preview} onChange={this.onPreviewChange} Height="500px"></TextArea>
            </SectionRight>
            </Section>
          <CreateButton primary>{this.props.type == "create" ? "作成" : "編集"}</CreateButton>
        </Form>
      </Container>
    )
  }
}

export default Create;