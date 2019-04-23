package com.chixing.service;

import com.chixing.entity.Note;

import java.util.List;

public interface NoteService {


    public List<Note> getLastTen();


    boolean save(Note note);

    List<Note> getMyList(int custId);

    Note getMyLastNote(int custId);
}
