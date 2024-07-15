import { formateDate } from "../utils/DateUtil";

// const Task = (props) => {
//   console.log(props);
//     return (
//         <div className="card">
//     <div className="content">
//       <div className="header">Go to Gym</div>
//       <div className="description">
//       <div class="meta">
//         Created Date
//       </div>
//       going to gym is good for muscle growth.
//       </div>
//     </div>
//     <div className="extra content">
//       <div className="ui two buttons">
//         <div className="ui basic green button">Edit</div>
//         <div className="ui basic red button">Delete</div>
//       </div>
//     </div>
//   </div>
//     );
// };

const Task = ({task: {title, description, createdDate}}) => {
    return (
        <div className="card">
    <div className="content">
      <div className="header">{title}</div>
      <div className="description">
      <div class="meta">
        {formateDate(createdDate)}
      </div>
      {description}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Edit</div>
        <div className="ui basic red button">Delete</div>
      </div>
    </div>
  </div>
    );
};


export default Task;