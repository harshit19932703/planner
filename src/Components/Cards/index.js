import React, { Component } from "react";
import MyCard from "./card";
import "./style.css";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  ModalFooter,
  Input,
  Label
} from "reactstrap";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          title: "Meeting with UI/UX",
          description: "Offers Page discussion and agenda for CMS Dashboard",
          category: "all"
        },
        {
          id: 2,
          title: "Sailing Schedules",
          description: "Call Anuj and Manish to get the list of schedules",
          category: "all"
        },
        {
          id: 3,
          title: "Release dates for New Search",
          description: "Discussion with stakeholders and rest for the new search release",
          category: "todo"
        },
        {
          id: 4,
          title: "Assignment",
          description: "Complete week planner Proto. till Monday",
          category: "completed"
        }
      ],
      showModal: false,
      newCardTitle: "",
      newCardDesc: ""
    };
  }
  addCard = () => {
    this.setState({ showModal: true });
  };
  saveNewTitle = e => {
    const { value } = e.target;
    this.setState({ newCardTitle: value });
  };
  saveNewDesc = e => {
    const { value } = e.target;
    this.setState({ newCardDesc: value });
  };

  addCardSave = () => {
    const { tasks, newCardDesc, newCardTitle } = this.state;
    if (tasks.length >= 1) {
      let id = tasks[tasks.length - 1].id + 1;
      tasks.push({
        id,
        title: newCardTitle,
        description: newCardDesc,
        category: "all"
      });
      this.setState({ tasks, showModal: false });
    } else {
      let id = 1;
      tasks.push({
        id,
        title: newCardTitle,
        description: newCardDesc,
        category: "all"
      });
      this.setState({ tasks, showModal: false });
    }
  };

  toggle = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  validate = () => {
    const { newCardTitle } = this.state;
    if (newCardTitle === null || newCardTitle === "") {
      return true;
    } else return false;
  };

  removeCard = item => {
    const { tasks } = this.state;
    tasks.splice(
      tasks.findIndex(function(i) {
        return i.id === item.id;
      }),
      1
    );
    this.setState({ tasks });
  };

  saveCard = (editItem, item) => {
    const { tasks } = this.state;
    if (editItem.hasOwnProperty("title")) {
      item.title = editItem.title;
    }
    if (editItem.hasOwnProperty("description")) {
      item.description = editItem.description;
    }
    const arr = [];
    arr.push(item);

    tasks.map(obj => arr.find(o => o.id === obj.id) || obj);
    this.setState({ tasks });
  };

  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    //console.log("ID", id);

    let tasks = this.state.tasks.filter(task => {
      //console.log("BOTH IDS", id, task.id);
      if (task.id == id) {
        task.category = cat;
      }
      return task;
    });
    //console.log("TASKS RETURNDDED", tasks);
    this.setState({
      ...this.state,
      tasks
    });
  };

  render() {
    const { newCardTitle } = this.state;
    var tasks = { all: [], todo: [], inprogress: [], completed: [] };
    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.id)}
          draggable
          className="draggable"
        >
          <MyCard
            data={t}
            key={t.id}
            removeCard={this.removeCard}
            editCard={this.editCard}
            saveCard={this.saveCard}
          />
        </div>
      );
    });

    return (
      <>
        <div className="container-drag">
          <div className="header">
            <div>
              <Button onClick={this.addCard} outline color="danger">
                + ADD A NEW TASK
              </Button>
            </div>
            <div className="heading" style={{ textAlign: "right" }}>
              YOUR PERSONAL PLANNER{" "}
            </div>
          </div>

          <div
            className="all"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "all");
            }}
          >
            <span className="task-header">ALL</span>
            {tasks.all}
          </div>

          <div
            className="todo"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "todo");
            }}
          >
            <span className="task-header">TODO's</span>
            {tasks.todo}
          </div>

          <div
            className="inprogress"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "inprogress");
            }}
          >
            <span className="task-header">IN-PROGRESS</span>
            {tasks.inprogress}
          </div>

          <div
            className="completed"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, "completed")}
          >
            <span className="task-header">COMPLETED</span>
            {tasks.completed}
          </div>
        </div>
        <Modal isOpen={this.state.showModal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            ADD A TASK TO YOUR LIST
          </ModalHeader>
          <ModalBody>
            <Label for="exampleText">
              <sup style={{ color: "red" }}>*</sup>Title:
            </Label>
            <Input
              type="text"
              name="title"
              id="Title"
              onChange={this.saveNewTitle}
            />
            <Label for="exampleText">Descripton:</Label>
            <Input
              type="textarea"
              name="description"
              id="Desc"
              onChange={this.saveNewDesc}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.addCardSave}
              disabled={newCardTitle !== "" ? false : true}
            >
              Save
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Cards;
