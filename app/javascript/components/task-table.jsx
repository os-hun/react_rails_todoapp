import React from 'react';
import TaskRow from './task-row'

let width = {
  maxWidth: '950px',
  position: 'relative',
  margin: '0 auto'
};

let textLeft = {
  textAlign: 'left',
};

class TaskTable extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks, getTasks } = this.props;

  //  渡されたtasksをmapで回し, TaskRowコンポーネントとしてまとめてレンダリング
    return(
      <table className="siimple-table" style={width}>
        <thead className="siimple-table-header">
          <tr className="siimple-table-row">
            <th className="siimple-table-cell" style={textLeft}>Title</th>
            <th className="siimple-table-cell" style={textLeft}>Description</th>
            <th className="siimple-table-cell"></th>
          </tr>
        </thead>
        <tbody className="siimple-table-body">
          {tasks.map(function (task, index) {
            return (
              <TaskRow
                key={index}
                id={task.id}
                title={task.title}
                description={task.description}
                getTasks={getTasks}
              />);
          }.bind(this))}
        </tbody>
      </table>
    )
  }
}

export default TaskTable;