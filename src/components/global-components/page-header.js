import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader(props){

        let HeaderTitle = props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = props?.subheader || HeaderTitle
		let CustomClass = props.customclass || '';

		return null;

        return (
		<div className={"ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "+CustomClass} 
			data-bs-bg={publicUrl+"assets/img/bg/14.jpg"}>
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className="ltn__breadcrumb-inner">
					<h1 className="page-title">{ HeaderTitle }</h1>
					<div className="ltn__breadcrumb-list">
						<ul>
						<li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
						<li>{ Subheader }</li>
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>


        )
    }
