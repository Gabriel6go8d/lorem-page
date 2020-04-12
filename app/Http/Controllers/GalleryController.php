<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\GalleryComment;
use App\User;

class GalleryController extends Controller
{
    public function index() {
        $commentlist = GalleryComment::all();
        foreach ($commentlist as $commentary){
            $id = $commentary->userid; 
            $commentary->userid = User::find($id)->name;
        }
        return view('gallery.index', ['jsonComment' => $commentlist]);
    }
}
