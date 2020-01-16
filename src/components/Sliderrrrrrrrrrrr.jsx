import React, { Component } from "react";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }
// https://react-slick.neostack.com/
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  showImageSlider = () =>{
      const {productItem} = this.props;
      return productItem.images.map(items => {
        return  <div key={items.id} style={{marginLeft:'15px'}}><img src={`/images/${productItem.subCategory}/slider/${items.image}`}  style={{width:'100%',}}  alt={items.id}/> </div>
     })
  }

  render() {
    console.log(this.props.productItem.images.length)
    return (
      <div>
        
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          style={{width:'600px', height:'400px',overflow:'hidden'}}
          slickPrev={true}
           slidesToScroll={1}
        //   speed={200}
        //   lazyLoad={true}
        >
        {this.showImageSlider()}
        </Slider>
       
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        //   centerMode={true}
        //   dotsClass={'slick-dots slick-thumb'}
        //   dots={true}
        //   fade={true}
        //   slidesToScroll={1}
        //   speed={200}
        //   centerMode={true}
        //   centerPadding={'60px'}
        //   infinite={true}
        //   style={{width:'600px', height:'80px',overflow:'hidden'}}

        >
        {/* {this.showImageSlider()} */}
        <div  style={{marginLeft:'15px'}}><img src={`/images/4/slider/1.webp`}  style={{width:'100%',}}  alt={1}/> </div>
        <div  style={{marginLeft:'15px'}}><img src={`/images/4/slider/2.webp`}  style={{width:'100%',}}  alt={1}/> </div>
        <div  style={{marginLeft:'15px'}}><img src={`/images/4/slider/3.webp`}  style={{width:'100%',}}  alt={1}/> </div>
        <div  style={{marginLeft:'15px'}}><img src={`/images/4/slider/4.webp`}  style={{width:'100%',}}  alt={1}/> </div>
        <div  style={{marginLeft:'15px'}}><img src={`/images/4/slider/5.webp`}  style={{width:'100%',}}  alt={1}/> </div>
        </Slider>
      </div>
    );
  }
}