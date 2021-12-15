import React, {useEffect} from "react";
import {useRecoilState} from "recoil";
import {localNotificationState} from "atoms";

export function useNotification(props, options={}){
	/*
	sends local notifications 
	options: save:false,
	*/
	const [localNotification, setLocalNotification]=useRecoilState(localNotificationState);
	const {title, body} = props;
	useEffect(()=>{
		if(title){
			setLocalNotification(props);
		}
	}, [title, body]);
	return null
}

export function PopUp(props, options={}){
	/*
		sends local notifications 
		options: save:false,
	*/
	// console.log("props101, PopUp", props)
	const [localNotification, setLocalNotification]=useRecoilState(localNotificationState);
	const {title, body} = props;
	useEffect(()=>{
		if(title){
			setLocalNotification(props);
		}        
	}, [title, body]);
	return null
}