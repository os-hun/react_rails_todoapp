import React from 'react';

let maxWidth = {
  maxWidth: '950px',
  position: 'relative',
  margin: 'auto',
};
let margin = {
  marginLeft: '20px',
};
let width = {
  width: '200px',
};

class TaskForm extends React.Component{
  constructor(props) {
    super(props);
    //入力フォーム用のstateをセットしておく
    this.state = {
      title: '',
      description: ''
    };
    this.createTask = this.createTask.bind(this);
  }
  createTask(event) {
    // Rails 側の /api/v1/tasks を POST メソッドで叩き、タスクを作成する
    let request = new Request('/api/v1/tasks', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description
      })
    });
    fetch(request).then(function (response) {
      return response.json();
    }).then((task) => {
    //  タスク作成が完了したら、タスク一覧を再取得する
      this.props.getTasks();
    }).catch(function (error) {
      console.log(error);
    }).finally(() => {
      this.setState({
        title: '',
        description: ''
      })
    });
    event.preventDefault();
  }

  render() {
    let { title, description } = this.state;

    return (
      <form onSubmit={this.createTask} className="siimple-form" style={maxWidth}>
        <div className="siimple-form-field">
          <label className="siimple-label siimple--color-dark">Title</label>
          <input
            type="text"
            value={title}
            placeholder="Title"
            className="siimple-input"
            style={width}
            onChange={(e) => {
              this.setState({
                title: e.target.value
              })
            }}
          />
          <label className="siimple-label siimple--color-dark" style={margin}>Description</label>
          <input
            type="text"
            className="siimple-input"
            value={description}
            placeholder="Description"
            style={width}
            onChange={(e) => {
              this.setState({
                description: e.target.value
              })
            }}
          />
          <input type="submit" value="Create Task" className="siimple-btn siimple-btn--teal" style={margin}/>
        </div>
      </form>
    )
  }
}

export default TaskForm;