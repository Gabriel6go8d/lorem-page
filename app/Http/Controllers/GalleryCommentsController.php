<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\GalleryComment;

class GalleryCommentsController extends Controller
{
    public function index() {

    }

    public function store() {
        if (Auth::check()){
            $newcomment = new GalleryComment();
            $newcomment->userid = Auth::User()->id;

            $body = str_replace('"','%731%', request('commentbody'));
            $body2 = str_replace(array("\r", "\n"),'%732%', $body);
            $newcomment->comment = $body2;  

            $newcomment->save();
        }       
        return redirect('/gallery#ComDiv');
    }
}
