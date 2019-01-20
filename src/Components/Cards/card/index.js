import React, { Component } from "react";
import "./style.css";
import moment from "moment";
import { Button, Input } from "reactstrap";

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
  }

  removeCardHandle = () => {
    const { removeCard, data } = this.props;
    removeCard(data);
  };

  editCardHandle = () => {
    this.setState({ isEdit: true });
  };
  saveCardHandle = () => {
    const { saveCard, data } = this.props;
    saveCard(this.state, data);
    this.setState({ isEdit: false });
  };

  editData = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  cancel = () => {
    this.setState({ isEdit: false });
  };

  renderCard = () => {
    const { data } = this.props;
    const curdate = moment().format("DD/MM/YYYY");
    return (
      <>
        <div className="cardbody">
          <div className="title">
            Task{data.id}: {data.title}
            <Button close onClick={this.removeCardHandle} />
          </div>
          <div className="body">{data.description}</div>
          <div className="buttonClass">
            <div className="dateClass">{curdate}</div>
            <Button
              onClick={this.editCardHandle}
              color="info"
              outline
              size="sm"
            >
              Edit
            </Button>
          </div>
        </div>
      </>
    );
  };
  renderEditCard = () => {
    const { data } = this.props;
    return (
      <>
        <div className="cardbody">
          <div className="title">
            Task{data.id}:{" "}
            <Input
              type="text"
              defaultValue={data.title}
              name="title"
              onChange={this.editData}
            />
          </div>
          <div className="body">
            {" "}
            <Input
              type="textarea"
              defaultValue={data.description}
              name="description"
              onChange={this.editData}
            />
          </div>
          <div className="buttonClass">
            <Button
              onClick={this.saveCardHandle}
              color="link"
              style={{ color: "green" }}
            >
              Save
            </Button>
            <Button onClick={this.cancel} color="link" style={{ color: "red" }}>
              Cancel
            </Button>
          </div>
        </div>
      </>
    );
  };
  render() {
    const { isEdit } = this.state;
    return <>{isEdit ? this.renderEditCard() : this.renderCard()}</>;
  }
}

export default MyCard;
