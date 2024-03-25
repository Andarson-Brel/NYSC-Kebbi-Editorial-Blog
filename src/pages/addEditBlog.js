import React from "react";
import { useState, useEffect } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
  orderBy,
} from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UploadBtn from "../components/uploadBtn";
import { Editor } from "@tinymce/tinymce-react";

const initialState = {
  title: "",
  tags: [],
  description: "",
  trending: "no",
  category: "",
};
const categoryOption = [
  "CDS Sensitization",
  "NYSC News",
  "Camp Activity",
  "Kebbi NYSC Event",
];

export function AddEditBlog({ user, setActive }) {
  console.log(user);
  const { id } = useParams();
  const [blogData, setBlog] = useState(initialState);
  const [file, setFile] = useState(null);

  const [progress, setProgress] = useState(null);

  const { title, tags, description, trending, category } = blogData;
  const navigate = useNavigate();
  function handleChange(e) {
    setBlog({ ...blogData, [e.target.name]: e.target.value });
  }

  function handleTags(tags) {
    setBlog({ ...blogData, tags });
  }
  function handleTrending(e) {
    setBlog({ ...blogData, trending: e.target.value });
  }
  function onCategoryChange(e) {
    setBlog({ ...blogData, category: e.target.value });
  }
  useEffect(() => {
    id && getBlogDetail();
  }, [id]);

  async function getBlogDetail() {
    const docRef = doc(db, "blogpost", id);
    const snapshot = await getDoc(docRef);

    console.log(snapshot);

    if (snapshot.exists()) {
      const BlogPost = snapshot.data(); // Access data directly from snapshot
      console.log(BlogPost);
      setBlog({ ...BlogPost });
    }
    setActive(null);
  }

  useEffect(() => {
    function uploadFile() {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("paused upload");
              break;
            case "running":
              console.log("running upload");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setBlog((prev) => ({ ...prev, imgUrl: downloadUrl }));
            toast.info("Image Uploaded Successfully");
          });
        }
      );
    }
    file && uploadFile();
  }, [file]);
  // console.log(blogData);
  async function handleSubmit(e) {
    e.preventDefault();
    if (category && trending && tags && title && description) {
      if (!id) {
        try {
          await addDoc(collection(db, "blogpost"), {
            ...blogData,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Blog Post Created Successfully");
        } catch (error) {
          toast.warn(error.msg);
        }
      } else {
        try {
          await updateDoc(doc(db, "blogpost", id), {
            ...blogData,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Blog Post Updated Successfully");
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      return toast.warn("All fields are required");
    }
    navigate("/");
  }
  return (
    <div className="create-post-container">
      <h4 className="create-edit-title">
        {id ? "Update Blog Post" : "Create Blog Post"}
      </h4>
      <form className="create-post-Form" onSubmit={handleSubmit}>
        <input
          className="text-input"
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="title"
        />

        <ReactTagInput tags={tags} placeholder="Tags" onChange={handleTags} />
        <div className="radio-cont">
          <p className="trending">Is it trending?</p>
          <input
            className="radio-input"
            value="yes"
            type="radio"
            name="radioOption"
            checked={trending === "yes"}
            onChange={handleTrending}
          />
          <label htmlFor="radioOption" className="radio-checked-label">
            Yes &nbsp;
          </label>

          <input
            className="radio-input"
            value="no"
            type="radio"
            name="radioOption"
            checked={trending === "no"}
            onChange={handleTrending}
          />
          <label htmlFor="radioOption" className="radio-checked-label">
            No
          </label>
        </div>
        <div className="category-dropdown-cont">
          <select
            className="category-dropdown"
            value={category}
            onChange={onCategoryChange}
          >
            <option>Select A Category</option>
            {categoryOption.map((option, i) => (
              <option value={option || ""} key={i}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="blog-textArea-cont">
          <textarea
            className="blog-textArea"
            aria-controls=""
            placeholder="Description"
            value={description}
            name="description"
            onChange={handleChange}
            rows="20"
          />
          {/* 
          <Editor
            apiKey="1w07v7ykbp97nn3s9g3sifmhfknpyn7yuvijz1f8dtcn4xvp"
            init={{
              plugins:
                "ai tinycomments mentions anchor autolink charmap codesample  image link lists media searchreplace visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
              toolbar:
                "undo redo | blocks| bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
              tinycomments_mode: "embedded",
              tinycomments_author: "Author name",
              mergetags_list: [
                { value: "First.Name", title: "First Name" },
                { value: "Email", title: "Email" },
              ],
              ai_request: (request, respondWith) =>
                respondWith.string(() =>
                  Promise.reject("See docs to implement AI Assistant")
                ),
            }}
            initialValue="Description"
            textareaName="description"
            onEditorChange={(newtext) =>
              setBlog({
                ...blogData,
                description: newtext,
              })
            }
          /> */}
        </div>

        <div className="upload-img-cont">
          <UploadBtn
            className="upload-img-input"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button
          className="btn-add main-btn"
          type="submit"
          disabled={progress !== null && progress < 100}
        >
          {id ? "update" : "Submit"}
        </button>
      </form>
    </div>
  );
}
