import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../redux/store";
import styled from "styled-components";
import "./App.css";

import { Table } from "antd";

const { Column } = Table;

const action = (type, payload) => store.dispatch({ type, payload });

const Container = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

function List(props) {
  useEffect(() => {
    action("FETCH_REQUESTED");
  }, []);

  return (
    <div>
      <h2>List of All Your Posts</h2>
      <Container>
        <Table dataSource={props.allPosts} rowKey="id">
          <Column title="ID" dataIndex="id" key="id" />
          <Column title="Title" dataIndex="title" key="title" />
          <Column title="Body" dataIndex="body" key="body" />
          <Column title="UserID" dataIndex="userId" key="userId" />
        </Table>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // computed data from state
    allPosts: state.posts.list
  };
};

const mapDispatchToProps = {
  // object full of action creators
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
