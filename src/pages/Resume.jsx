export default function Resume() {
    return (
      <div>
        <a className="btn btn-primary btn-lg" href="..\src\assets\resume.pdf" download="resume.pdf">Click here to download my resume!</a>
        <div className="pb-3">
        <h2 className="p-3">Front End Skills</h2>
        <ul className="list-group">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">Javascript</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">JQuery</li>
          <li className="list-group-item">Bootsrap</li>
          <li className="list-group-item">Tailwind</li>
        </ul>
        </div>
        <div className="pb-5">
        <h2 className="p-3">Back End Skills</h2>
        <ul className="list-group">
          <li className="list-group-item">MVC Architecture</li>
          <li className="list-group-item">Node.js</li>
          <li className="list-group-item">MongoDb</li>
          <li className="list-group-item">Express.js</li>
          <li className="list-group-item">MERN Stack</li>
          <li className="list-group-item">GraphQL</li>
          <li className="list-group-item">NoSQL</li>
        </ul>
        </div>
      </div>
    );
  }
  