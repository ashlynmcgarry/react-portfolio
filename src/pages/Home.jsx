export default function Home() {
    return (
      <div className="pb-5">
        <h1>Ashlyn McGarry</h1>
        <img src="..\src\assets\headshot.jpg" className="rounded-circle pt-3 pb-5"/>
        <p>
        <i>Hi, I'm Ashlyn!</i> <br /> Based in Adelaide, South Australia, I'm a budding web developer. With a background in copywriting and Digital Marketing, I'm looking to take my career to the next level by learning both front and back end web development.
        <br />In my free time, you can find me hanging with my cats, reading, sewing, knitting, crocheting or trying to figure out how to do several of these at once.
        </p>
        <br />
          <a className="btn btn-primary btn-lg" href="..\src\assets\resume.pdf" download="resume.pdf">Click here to check out my resume!</a>
      </div>
    );
  }
  