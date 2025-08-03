#!/usr/bin/gjs

const GIRepository = imports.gi.GIRepository;
const repo = GIRepository.Repository.get_default();

let gtkVersion;
if(repo.enumerate_versions('Gtk').includes('4.0'))
{
    gtkVersion = '4.0';
}
else if(repo.enumerate_versions('Gtk').includes('3.0'))
{
    gtkVersion = '3.0';
}

imports.gi.versions.Gtk = gtkVersion;
const Gtk = imports.gi.Gtk;

// Create a new application
let app = new Gtk.Application({ application_id: 'org.lucasssantos.GTKTest' });

// When the application is launched…
app.connect('activate', () => {
    // … create a new window …
    let win = new Gtk.ApplicationWindow({ application: app });
    // … with a button in it …
    let btn = new Gtk.Button({ label: 'Hello, World!' });
    // … which closes the window when clicked
    btn.connect('clicked', () => { win.close(); });
    win.set_child(btn);
    win.present();
});