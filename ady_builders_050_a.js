/*--- Platform page 049 Motion Java Script ---*/

  /* -------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ---*/
/* ----------------------------------------------------=--- */


function OnWeLoad()
{

	Img1={max:1,pos:0,grp:'2'};
	Img1[0]=new Image();Img1[0].src='images/square.gif';
	Img1[1]=new Image();Img1[1].src='images/ady_builders_back-button.gif';
	Img44={max:1,pos:0,grp:'43'};
	Img44[0]=new Image();Img44[0].src='images/square.gif';
	Img44[1]=new Image();Img44[1].src='images/ady_builders_next-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e1\').src':(IE)?'e1.src':'document.e1.src';
	IDP[2]=(V5)?'document.getElementById(\'e44\').src':(IE)?'e44.src':'document.e44.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */
