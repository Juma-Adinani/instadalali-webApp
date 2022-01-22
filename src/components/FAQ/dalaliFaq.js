import React from "react";
import FaqData from "./faqData";

function DalaliFaq() {
  return (
    <div className="container">
      <h4>DALALI</h4>
      <div className="ltn__faq-area mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__faq-inner ltn__faq-inner-2">
                <div id="accordion_2">
                  {FaqData.dalalis.map((faq) => (
                    <div className="card">
                      <h6
                        className="collapsed ltn__card-title"
                        data-bs-toggle="collapse"
                        // data-bs-target="#faq-item-2-1"
                        data-bs-target={`#${faq.id}`}
                        aria-expanded="false"
                      >
                        {faq.qn}
                      </h6>
                      <div
                        id={faq.id}
                        className="collapse"
                        data-bs-parent="#accordion_2"
                      >
                        <div className="card-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DalaliFaq;
