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
    return productItem.images.map((items,index) => {
      return  <div key={index} style={{marginLeft:'15px'}}><img src={`/images/${productItem.subCategory}/${productItem.id}/slider/${items.image}`}  style={{width:'100%',}}  alt={index}/> </div>
   })
}

  render() {
      const {images} = this.props;
    return (
      <div>
        
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          style={{width:'600px'}}
        >

{/* {images.map(items => {
               return  <div><img src={`/images/slider/${items.image}`}  style={{width:'100%'}}  alt={items.id}/> </div>
            })} */}
{this.showImageSlider()}
         
            {/* <img src="/images/4/slider/1.webp" style={{width:'100%'}} alt="1"/>
         
          <div>
          <img src="/images/4/slider/2.webp" style={{width:'100%'}} alt="2"/>
          </div>
          <div>
          <img src="/images/4/slider/3.webp" style={{width:'100%'}} alt="3"/>
          </div>
          <div>
          <img src="/images/4/slider/4.webp" style={{width:'100%'}} alt="4"/>
          </div>
          <div>
          <img src="/images/4/slider/5.webp" style={{width:'100%'}} alt="5"/>
          </div> */}
        
        </Slider>
       
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={this.props.productItem.images.length -1}
          swipeToSlide={true}
          focusOnSelect={true}
          style={{width:'600px'}}
        >
         {/* <div>
            <img src="/images/4/slider/1.webp" style={{width:'100%'}} alt="1"/>
          </div>
          <div>
          <img src="/images/4/slider/2.webp" style={{width:'100%'}} alt="2"/>
          </div>
          <div>
          <img src="/images/4/slider/3.webp" style={{width:'100%'}} alt="3"/>
          </div>
          <div>
          <img src="/images/4/slider/4.webp" style={{width:'100%'}} alt="4"/>
          </div>
          <div>
          <img src="/images/4/slider/5.webp" style={{width:'100%'}} alt="5"/>
          </div> */}
          {this.props.productItem.images.length > 1 ? this.showImageSlider() : null}
        </Slider>
      </div>
    );
  }
}