/*--- Platform page 002 Motion Java Script ---*/

  /* --------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ----*/
/* --------------------------------------------------------- */


function OnWeLoad()
{

	Img4={max:1,pos:0,grp:'5'};
	Img4[0]=new Image();Img4[0].src='images/square.gif';
	Img4[1]=new Image();Img4[1].src='images/ady_builders_next-button.gif';
	Img6={max:1,pos:0,grp:'7'};
	Img6[0]=new Image();Img6[0].src='images/square.gif';
	Img6[1]=new Image();Img6[1].src='images/ady_builders_back-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e4\').src':(IE)?'e4.src':'document.e4.src';
	IDP[2]=(V5)?'document.getElementById(\'e6\').src':(IE)?'e6.src':'document.e6.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */
