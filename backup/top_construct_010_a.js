/*--- Platform page 010 Motion Java Script ---*/

  /* --------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ----*/
/* --------------------------------------------------------- */


function OnWeLoad()
{

	Img15={max:1,pos:0,grp:'16'};
	Img15[0]=new Image();Img15[0].src='images/square.gif';
	Img15[1]=new Image();Img15[1].src='images/top_construct_next-button.gif';
	Img17={max:1,pos:0,grp:'18'};
	Img17[0]=new Image();Img17[0].src='images/square.gif';
	Img17[1]=new Image();Img17[1].src='images/top_construct_back-button.gif';	IDP.bw=0; IDP.bd=0;
	if(self.innerHeight)
	{	IDP.bw=self.innerWidth;
		IDP.bd=self.innerHeight;
	}
	else if(document.documentElement && document.documentElement.clientHeight)
	{	IDP.bw=document.documentElement.clientWidth;
		IDP.bd=document.documentElement.clientHeight;
	}
	else if(document.body)
	{	IDP.bw=document.body.clientWidth;
		IDP.bd=document.body.clientHeight;
	}
	IDP.bw=IDP.bw / 1.33;
	IDP.bd=IDP.bd / 1.33;
	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e15\').src':(IE)?'e15.src':'document.e15.src';
	IDP[2]=(V5)?'document.getElementById(\'e17\').src':(IE)?'e17.src':'document.e17.src';
	IDP[3]={	x:new Array(346,352,360,368,376,387,399,414,434,450,464,471),
				y:new Array(474,468,466,467,471,469,466,473,467,472,468,469),
				s:6 };
	IDP[4]=(V5)?document.getElementById('e5').style:(IE)?e5.style:document.e5;
	IDP[5]={	x:new Array(252,252),
				y:new Array(-17,452),
				s:14 };
	IDP[6]=(V5)?document.getElementById('e3').style:(IE)?e3.style:document.e3;
	IDP[7]={	x:new Array(IDP.bw,360),
				y:new Array(472,472),
				s:11 };
	IDP[8]=(V5)?document.getElementById('e2').style:(IE)?e2.style:document.e2;
	isOvr=1;
	window.setTimeout('DoRoute(4,3,0,0,1,100)',1000);
	window.setTimeout('DoRoute(6,5,0,0,0,100)',2000);
	window.setTimeout('DoRoute(8,7,0,0,0,100)',5000);
}


/*--- EndOfFile ---*/    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */
