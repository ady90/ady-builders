/*--- Platform page 014 Motion Java Script ---*/

  /* --------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ----*/
/* --------------------------------------------------------- */


function OnWeLoad()
{

	Img5={max:1,pos:0,grp:'6'};
	Img5[0]=new Image();Img5[0].src='images/square.gif';
	Img5[1]=new Image();Img5[1].src='images/ady_builders_next-button.gif';
	Img7={max:1,pos:0,grp:'8'};
	Img7[0]=new Image();Img7[0].src='images/square.gif';
	Img7[1]=new Image();Img7[1].src='images/ady_builders_back-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e5\').src':(IE)?'e5.src':'document.e5.src';
	IDP[2]=(V5)?'document.getElementById(\'e7\').src':(IE)?'e7.src':'document.e7.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */
