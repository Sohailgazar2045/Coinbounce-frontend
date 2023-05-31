import { submitBlog } from "../../api/internal";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./SubmitBlog.module.css";
import TextInput from "../../components/TextInput/TextInput";
import { useNavigate } from "react-router-dom";

function SubmitBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photopath, setPhotopath] = useState("");

  const author = useSelector((state) => state.user._id);
  const getPhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhotopath(reader.result);
    };
  };

  const submitHandler = async () => {
    const data = {
      author,
      title,
      content,
      photopath,
    };

    const response = await submitBlog(data);

    if (response.status === 201) {
      navigate("/");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Create a blog!</div>
      <TextInput
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "60%" }}
      />
      <textarea
        className={styles.content}
        placeholder="your content goes here..."
        maxLength={4000}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className={styles.photoPrompt}>
        <p>Choose a photo</p>
        <input
          type="file"
          name="photopath"
          id="photopath"
          accept="image/jpg, image/jpeg, image/png"
          onChange={getPhoto}
        />
        {photopath !== "" ? (
          <img src={photopath} width={150} height={150} />
        ) : (
          ""
        )}
      </div>
      <button
        className={styles.submit}
        onClick={submitHandler}
        disabled={title === "" || content === "" || photopath === ""}
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitBlog;
