import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {utils, requests, url } from "helpers";

function Wishlist(props) {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const loggedUser = utils.getUser()
  const {item} = props;

  useEffect(() => {
    if(item){
      // add to wishlist
      async function addWishlist(){
        const res = await requests.post(url.dalali.wishlist, {
          "user":loggedUser?.pk,
          "listing":item.id
      })
      }
      if(loggedUser){
        addWishlist()
      }else{
        alert("You must login to add to wishlist")
      }
      
    }
  }, [item])

  if(!loggedUser) return null;

  return (
    <div className="ltn__modal-area ltn__add-to-cart-modal-area">
      <div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="ltn__quick-view-modal-inner">
                <div className="modal-product-item">
                  <div className="row">
                    <div className="col-12">
                      <div className="modal-product-img">
                        <img
                          src={item?.post?.url}
                          alt="#"
                        />
                      </div>
                      <div className="modal-product-info go-top">
                        <h5>
                          <Link to="/product-details">
                            {utils.truncate({text:item?.post?.caption, size:160})}
                          </Link>
                        </h5>
                        <p className="added-cart">
                          <i className="fa fa-check-circle" /> Successfully
                          added to your Wishlist
                        </p>
                        <div className="btn-wrapper">
                          <Link
                            to="/wishlist"
                            className="theme-btn-1 btn btn-effect-1"
                          >
                            View Wishlist
                          </Link>
                        </div>
                      </div>
                      {/* additional-info */}
                      <div className="additional-info d-none">
                        <p>
                          We want to give you <b>10% discount</b> for your first
                          order, <br /> Use discount code at checkout
                        </p>
                        <div className="payment-method">
                          <img
                            src={publicUrl + "assets/img/icons/payment.png"}
                            alt="#"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
