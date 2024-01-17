import React, { useEffect, useState } from "react";

const VideoSection = () => {
  const [video, setVideo] = useState([]);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/videos`)
      .then((res) => res.json())
      .then((info) => setVideo(info));
  }, []);

  useEffect(() => {
    fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/videos-items`)
        .then((res) => res.json())
        .then((info) => setItems(info));
}, []);

  return (
    // <>
    //   {
    //     video.map(v =>
    //       <section
    //         id="vedio"
    //         className="vedio-area pt-120 pb-90 fix"
    //         style={{
    //           backgroundImage: "url(img/video/vedio-bg.png)",
    //           backgroundRepeat: "no-repeat",
    //         }}
    //       >
    //         <div className="container">
    //           <div className="row">
    //             <div className="col-lg-12">
    //               <div className="section-title center-align text-center">
    //                 <h5>{v.watchText}</h5>
    //                 <h2>{v.videoHeading}</h2>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-lg-12 col-md-12">
    //               <div
    //                 className="video-img wow fadeInRight animated"
    //                 data-animation="fadeInDown animated"
    //                 data-delay=".2s"
    //                 style={{
    //                   backgroundImage: `url(${v.videoImg})`,
    //                   backgroundRepeat: "no-repeat",
    //                   backgroundPosition: "center",
    //                 }}
    //               >

    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </section>)

    //   }

    // </>

    <>
      {
        video.map(v => <div className="team-with-video">

          <section className="video-section">

            <div className="container">
              <div className="tilke-video" style={{ backgroundImage: `url(${v.imageLink})` }}>
                <a href={v.videoLink} className="video-popup" data-lity><i className="fas fa-play" /></a>
              </div>
            </div>
          </section>
          <section className="team-section section-gap-top">
            <div className="container-fluid container-1600">
              <div className="section-heading heading-white text-center mb-40">
                <h2 className="title">{v.videoSectionTitle}</h2>
                <span className="tagline">{v.videoSectionText}</span>
              </div>
            
            </div>
          </section>
        </div>
        )
      }



    </>
  );
};

export default VideoSection;
