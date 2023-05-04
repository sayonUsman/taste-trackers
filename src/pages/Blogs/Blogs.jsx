import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto mt-24 p-2">
      <p className="text-md font-semibold">
        * What is the differences between uncontrolled and controlled
        components?
      </p>

      <div className="ml-5">
        <p className="text-md font-semibold mt-3"># Uncontrolled Component</p>

        <div className="ml-3">
          <p>Component updates own internal state on user interaction</p>
          <p>Data flows within the component</p>
          <p>More difficult to debug</p>
        </div>
      </div>

      <div className="ml-5">
        <p className="text-md font-semibold mt-5"># Controlled Component</p>

        <div className="ml-3">
          <p>Parent component updates state on user interaction</p>
          <p>Data flows from parent component to component</p>
          <p>Easier to debug</p>
        </div>
      </div>

      <p className="text-md font-semibold mt-5">
        * How to validate React props using PropTypes?
      </p>

      <div className="ml-5">
        <p className="text-md font-semibold mt-3">
          # The way to validate React props using PropTypes
        </p>

        <div className="ml-3">
          <p>1. PropTypes.any : The prop can be of any data type.</p>
          <p>2. PropTypes.bool : The prop should be a Boolean.</p>
          <p>3. PropTypes.number : The prop should be a number.</p>
          <p>4. PropTypes.string : The prop should be a string.</p>
          <p>5. PropTypes.func : The prop should be a function.</p>
          <p>6. PropTypes.array : The prop should be an array.</p>
        </div>
      </div>

      <p className="text-md font-semibold mt-5">
        * What is the difference between express.js and node.js
      </p>

      <div className="ml-5">
        <p className="text-md font-semibold mt-3"># Express.js</p>

        <div className="ml-3">
          <p>
            It is used to build web-apps using approaches and principles of
            Node.js.
          </p>
          <p>Framework based on Node.js.</p>
          <p>Written in JavaScript</p>
        </div>
      </div>

      <div className="ml-5">
        <p className="text-md font-semibold mt-5"># Node.js</p>

        <div className="ml-3">
          <p>
            It is used to build server-side, input-output, event-driven apps.
          </p>
          <p>It is built on Google’s V8 engine.</p>
          <p>Written in C, C++, JavaScript</p>
        </div>
      </div>

      <p className="text-md font-semibold mt-5">
        * What is a custom hook and why will you create a custom hook?
      </p>

      <p className="ml-5">
        # A custom hook is a special JavaScript function whose name starts with
        'use' and can be used to call other hooks. <br /># Hooks allow you to
        reuse stateful logic without changing your component. This makes it easy
        to share Hooks among many components or with the community.
      </p>
    </div>
  );
};

export default Blogs;
