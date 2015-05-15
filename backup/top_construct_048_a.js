/*--- Platform page 048 Motion Java Script ---*/

  /* --------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ----*/
/* --------------------------------------------------------- */


function OnWeLoad()
{

	Img2={max:1,pos:0,grp:'3'};
	Img2[0]=new Image();Img2[0].src='images/square.gif';
	Img2[1]=new Image();Img2[1].src='images/top_construct_back-button.gif';
	Img4={max:1,pos:0,grp:'5'};
	Img4[0]=new Image();Img4[0].src='images/square.gif';
	Img4[1]=new Image();Img4[1].src='images/top_construct_next-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e2\').src':(IE)?'e2.src':'document.e2.src';
	IDP[2]=(V5)?'document.getElementById(\'e4\').src':(IE)?'e4.src':'document.e4.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */
