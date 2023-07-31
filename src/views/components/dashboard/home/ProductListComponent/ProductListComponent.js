import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./ProductListComponent.css";
const ProductListComponent = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div className="form-group">
              <input type="text" placeholder="search...." />
              <span className="bx-search">
                <BiSearchAlt />
              </span>
            </div>
          </div>

          <div class="col">
            <button
              className="button-add"
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Add Product
            </button>
            <button
              type="button"
              data-bs-toggle="modal"
              className="button-add mx-2"
            >
              Add categorey
            </button>
          </div>
        </div>
      </div>

      <div class="box-wrap">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>sr no.</th>
                <th>Name</th>
                <th>phone no.</th>
                <th>address</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nilu yadav</td>
                <td>913547589</td>
                <td>surat</td>
                <td>active</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ashwini Gaykwad </td>
                <td>8800376459</td>
                <td>chennai</td>
                <td>active</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Ankita makwana</td>
                <td>900025467</td>
                <td>bharuch</td>
                <td>active</td>
              </tr>
              <tr>
                <td>4</td>
                <td>priyanka singh</td>
                <td>8866737389</td>
                <td>vapi</td>
                <td>active</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dipika patel</td>
                <td>8866737389</td>
                <td>vadodra</td>
                <td>active</td>
              </tr>
              <tr>
                <td>6</td>
                <td>pinki patel</td>
                <td>8866737389</td>
                <td>surat</td>
                <td>active</td>
              </tr>
              <tr>
                <td>7</td>
                <td>harsh patel</td>
                <td>8866737389</td>
                <td>surat</td>
                <td>active</td>
              </tr>
              <tr>
                <td>8</td>
                <td>shant patel</td>
                <td>8866737389</td>
                <td>surat</td>
                <td>active</td>
              </tr>
              <tr>
                <td>9</td>
                <td>hitesh patel</td>
                <td>8866737389</td>
                <td>surat</td>
                <td>active</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-2">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListComponent;
