2. Incremental Development Checklist

Each step adds one feature, testable in isolation, with clear state boundaries.

Phase 1 – Canvas & Static Rendering - DONE

Scaffold app structure (empty canvas + UI placeholder).

Render hardcoded entity (e.g., rectangle) via scene state.

Verify rendering pipeline end-to-end.

Phase 2 – Entity Model & Scene State

Design Entity interface and two concrete types.

Implement SceneManager (add/remove entities).

Render dynamic list of entities; test adding via code.

Phase 3 – Basic Draw Tools

Define Tool interface (press/move/release).

Implement LineTool (click-drag or click-start+click-end)—test both interaction modes:

Drag Mode: press→drag→release

Click Mode: click to start, click to finish

Add ToolSelector UI to switch tools.

Phase 4 – Selection & Single-Entity Manipulation

Implement SelectTool for single-click selection: highlight and move.

Add drag-to-move selected entity; test vector state update.

Enable cancel of current action (e.g., pressing Esc): tool listens for cancel event and resets temporary state.

Phase 5 – Rectangle & Text Tools

Add RectangleTool and TextTool with both drag and click modes.

Test cancel (Esc) during shape creation.

Phase 6 – Multi-Select & Selection Window

Implement selection window (click-drag draws temporary translucent rectangle).

Render Temporary: UI draws overlay rectangle during drag.

Hit Test: on drag end, select all entities whose bounding boxes intersect.

Test window select vs single-click select.

Phase 7 – Transform Handles (Scale & Rotate)

Extend Entity with rotation and scale properties.

Add transform handles around selected entity/group:

Corner handles for scale (uniform/axis)

Rotate handle above bounding box

Center area draggable for move

Test handle interactions and cancel on Esc.

Phase 8 – Grouping & Composite Behavior

Implement GroupEntity: composite of children, with its own transforms.

Group command (select+group), ungroup command.

Test group selection, transforms applied to group.

Phase 9 – Undo/Redo (Command Pattern)

Define Command interface and concrete commands: Add, Move, Scale, Rotate, Group, Ungroup, EditText.

Implement CommandManager with undo/redo stacks.

Test undo/redo for each action and composite group actions.

Phase 10 – Serialization & Export

SceneSerializer: JSON <-> entity graph (including transforms and groups).

Exporter: produce image (PNG/SVG) from final scene.

Test save/load roundtrip and export.

Phase 11 – Clipboard (Copy/Cut/Paste)

ClipboardManager: store deep copies of selected entities.

Implement copy, cut, paste commands.

Test paste positioning and undo for clipboard actions.

Phase 12 – Advanced Polishes

Snap-to-grid and snapping to other entities.

Keyboard shortcuts and menu actions.

Performance optimizations for large scenes.

