import React from "react";
import { Link } from "react-router-dom";
import { utils } from "helpers";

function Cart(props) {
  const {item}=props;
  return (
    <div className="ltn__modal-area ltn__add-to-cart-modal-area">
      <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
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
                          src={item?.post?.uri}
                          alt="#"
                        />
                      </div>
                      <div className="modal-product-info go-top">
                        <h5 className="go-top">
                          <Link to={`/product/${item?.id}`}>
                            {utils.truncate({text:item?.post?.caption, size:32})}
                          </Link>
                        </h5>
                        <p className="added-cart">
                          <i className="fa fa-check-circle" />
                          Successfully added to your Cart
                        </p>
                        <div className="btn-wrapper">
                          <Link
                            to="/cart"
                            className="theme-btn-1 btn btn-effect-1"
                          >
                            View Cart
                          </Link>
                          <Link
                            to="/checkout"
                            className="theme-btn-2 btn btn-effect-2"
                          >
                            Checkout
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
                            src={ "/assets/img/icons/payment.png"}
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

export default Cart;
