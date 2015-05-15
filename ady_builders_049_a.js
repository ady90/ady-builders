/*--- Platform page 049 Motion Java Script ---*/

  /* -------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ---*/
/* ----------------------------------------------------=--- */


function OnWeLoad()
{

	Img1={max:1,pos:0,grp:'2'};
	Img1[0]=new Image();Img1[0].src='images/square.gif';
	Img1[1]=new Image();Img1[1].src='images/ady_builders_back-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	Img35={max:1,pos:0,grp:'36'};
	Img35[0]=new Image();Img35[0].src='images/square.gif';
	Img35[1]=new Image();Img35[1].src='images/ady_builders_next-button.gif';
	IDP[1]=(V5)?'document.getElementById(\'e1\').src':(IE)?'e1.src':'document.e1.src';
	IDP[2]=(V5)?'document.getElementById(\'e35\').src':(IE)?'e35.src':'document.e35.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */
