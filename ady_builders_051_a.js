/*--- Platform page 049 Motion Java Script ---*/

  /* -------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ---*/
/* ----------------------------------------------------=--- */


function OnWeLoad()
{

	Img1={max:1,pos:0,grp:'2'};
	Img1[0]=new Image();Img1[0].src='images/square.gif';
	Img1[1]=new Image();Img1[1].src='images/ady_builders_back-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	Img36={max:1,pos:0,grp:'37'};
	Img36[0]=new Image();Img36[0].src='images/square.gif';
	Img36[1]=new Image();Img36[1].src='images/ady_builders_next-button.gif';
	IDP[1]=(V5)?'document.getElementById(\'e1\').src':(IE)?'e1.src':'document.e1.src';
	IDP[2]=(V5)?'document.getElementById(\'e36\').src':(IE)?'e36.src':'document.e36.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */

