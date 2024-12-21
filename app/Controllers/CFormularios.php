<?php

namespace App\Controllers;

class CFormularios extends BaseController
{
    public function MMostrarForm1(): string
    {
        return view("Forms/form1");
    }

    public function MMostrarForm2(): string
    {
        return view("Forms/form2");
    }
    public function MMostrarForm3(): string
    {
        return view("Forms/form3");
    }
    public function MMostrarFormFinal(): string
    {
        return view("Forms/formFinal");
    }

}
