import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsActionData } from "../../Redux/Action/ActionPost";
import axios from "axios";
import Table from "react-bootstrap/Table";
export default function Post() {
  const post_item = useSelector((state) => state.PostDataState);
  console.log(post_item?.data, "post----");
  const dispatch = useDispatch();

  const getApidata = () => {
    dispatch(postsActionData());
  };

  const apiResponse = () => {
    axios("https://jsonplaceholder.typicode.com/posts").then((response) =>
      console.log(response)
    );
  };

  useEffect(() => {
    getApidata();
  }, []);
  return (
    <div>
      Post
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title </th>
            <th>Body </th>
          </tr>
        </thead>
        <tbody>
          {post_item?.data?.data?.map((item, item_key) => {
            return (
              <tr key={item_key}>
                <td>{item.id} </td>
                <td>{item.title} </td>
                <td>{item.body} </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
