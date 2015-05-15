/*--- Platform page 037 Motion Java Script ---*/

  /* --------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ----*/
/* --------------------------------------------------------- */



function OnWeLoad()
{

	Img3={max:1,pos:0};
	Img3[0]=new Image();Img3[0].src='images/top_construct037001.gif';
	Img3[1]=new Image();Img3[1].src='images/top_construct037002.gif';
	Img10={max:1,pos:0,grp:'11'};
	Img10[0]=new Image();Img10[0].src='images/square.gif';
	Img10[1]=new Image();Img10[1].src='images/top_construct_back-button.gif';
	Img12={max:1,pos:0,grp:'13'};
	Img12[0]=new Image();Img12[0].src='images/square.gif';
	Img12[1]=new Image();Img12[1].src='images/top_construct_next-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e3\').src':(IE)?'e3.src':'document.e3.src';
	IDP[2]=(V5)?'document.getElementById(\'e10\').src':(IE)?'e10.src':'document.e10.src';
	IDP[3]=(V5)?'document.getElementById(\'e12\').src':(IE)?'e12.src':'document.e12.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */
