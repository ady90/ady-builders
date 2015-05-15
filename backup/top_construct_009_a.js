/*--- Platform page 009 Motion Java Script ---*/

  /* --------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ----*/
/* --------------------------------------------------------- */


function OnWeLoad()
{

	Img9={max:1,pos:0};
	Img9[0]=new Image();Img9[0].src='images/top_construct009001.gif';
	Img9[1]=new Image();Img9[1].src='images/top_construct009002.gif';
	Img11={max:1,pos:0,grp:'12'};
	Img11[0]=new Image();Img11[0].src='images/square.gif';
	Img11[1]=new Image();Img11[1].src='images/top_construct_next-button.gif';
	Img13={max:1,pos:0,grp:'14'};
	Img13[0]=new Image();Img13[0].src='images/square.gif';
	Img13[1]=new Image();Img13[1].src='images/top_construct_back-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e9\').src':(IE)?'e9.src':'document.e9.src';
	IDP[2]=(V5)?'document.getElementById(\'e11\').src':(IE)?'e11.src':'document.e11.src';
	IDP[3]=(V5)?'document.getElementById(\'e13\').src':(IE)?'e13.src':'document.e13.src';
	isOvr=1;
}


/*--- EndOfFile ---*/    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */
