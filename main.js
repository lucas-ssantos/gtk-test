#!/usr/bin/gjs

const { Gtk } = imports.gi;

Gtk.init();

const win = new Gtk.Window({
    title: "Olá Flatpak!",
    default_width: 300,
    default_height: 100,
});

win.connect("destroy", () => Gtk.main_quit());

const label = new Gtk.Label({ label: "Hello, mundo com GTK + JS!" });
win.set_child(label);

win.show();
Gtk.main();