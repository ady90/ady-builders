/*--- Platform page 008 Motion Java Script ---*/

  /* --------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ----*/
/* --------------------------------------------------------- */


function OnWeLoad()
{

	Img9={max:1,pos:0,grp:'10'};
	Img9[0]=new Image();Img9[0].src='images/square.gif';
	Img9[1]=new Image();Img9[1].src='images/ady_builders_next-button.gif';
	Img11={max:1,pos:0,grp:'12'};
	Img11[0]=new Image();Img11[0].src='images/square.gif';
	Img11[1]=new Image();Img11[1].src='images/ady_builders_back-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e9\').src':(IE)?'e9.src':'document.e9.src';
	IDP[2]=(V5)?'document.getElementById(\'e11\').src':(IE)?'e11.src':'document.e11.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */
