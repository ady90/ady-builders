/*--- Platform page 018 Motion Java Script ---*/

  /* --------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ----*/
/* --------------------------------------------------------- */


function OnWeLoad()
{

	Img6={max:1,pos:0};
	Img6[0]=new Image();Img6[0].src='images/square.gif';
	Img6[1]=new Image();Img6[1].src='images/ady_builders_next-button.gif';
	Img7={max:1,pos:0,grp:'8'};
	Img7[0]=new Image();Img7[0].src='images/square.gif';
	Img7[1]=new Image();Img7[1].src='images/ady_builders_back-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e6\').src':(IE)?'e6.src':'document.e6.src';
	IDP[2]=(V5)?'document.getElementById(\'e7\').src':(IE)?'e7.src':'document.e7.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */
