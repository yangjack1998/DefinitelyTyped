// Type definitions for GoJS 1.2
// Project: http://gojs.net/beta/api/index.html
// Definitions by: Barbara Duckworth <https://github.com/barbara42/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module go {
    /**
    * A Brush holds color information and describes how to draw the inside
    * of a Shape or the stroke of a shape or a TextBlock or the
    * background of any GraphObject.
    * A Brush must not be modified once it has been assigned to a GraphObject,
    * such as the Shape#fill or TextBlock#stroke
    * or GraphObject#background.
    * However, a Brush may be shared by multiple GraphObjects.
    */
    class Brush {
        /**
        * Construct a Brush class that holds the given color information.
        * @param {EnumValue|string=} type Optional,
        * one of the values  Brush#Solid,  Brush#Linear, Brush#Radial,
        * Brush#Pattern, or a well-formed CSS string describing a solid color brush. No parameter
        * defaults to a Brush.Solid with a color description of 'black'.*/
        constructor(...args: any[]);
        /**Gets or sets the color of a solid Brush.*/
        color: string;
        /**Gets or sets a Map holding all of the color stops used in this gradient, where the key is a number, the fractional distance between zero and one (inclusive), and where the corresponding value is a color string.*/
        colorStops: Map;
        /**Gets or sets the ending location for a linear or radial gradient.*/
        end: Spot;
        /**Gets or sets the radius of a radial brush at the end location.*/
        endRadius: number;
        /**Gets or sets the pattern of a brush of type Brush#Pattern.*/
        pattern: HTMLCanvasElement;
        /**Gets or sets the starting location for a linear or radial gradient.*/
        start: Spot;
        /**Gets or sets the radius of a radial brush at the start location.*/
        startRadius: number;
        /**Gets or sets the type of brush.*/
        type: EnumValue;
        /**
        * Specify a particular color at a particular fraction of the distance.
        * If the  #type is Brush#Solid, change the type to Brush#Linear.
        * You should have a color stop at zero and a color stop at one.
        * You should not have duplicate color stop values at the same fractional distance.
        * @param {number} loc between zero and one, inclusive.
        * @param {string} color
        */
        addColorStop(loc: number, color: string);
        /**Create a copy of this Brush, with the same values.*/
        copy(): Brush;
        /**
        * This static method can be used to generate a random color.
        * @param {number=} min a number between zero and 255, defaults to 128.
        * @param {number=} max a number between zero and 255, defaults to 255.
        */
        static randomColor(min?: number, max?: number): string;
        /**For linear gradient brushes, used as the value for Brush#type.*/
        Linear: EnumValue;
        /**For pattern brushes, used as the value for Brush#type.*/
        Pattern: EnumValue;
        /**For radial gradient brushes, used as the value for Brush#type.*/
        Radial: EnumValue;
        /**For simple, solid color brushes, used as the value for Brush#type.*/
        Solid: EnumValue;
    }
    /**
    * The Geometry class is used to define the "shape" of a Shape.
    * A Geometry can be simple straight lines, rectangles, or ellipses.
    * A Geometry can also be an arbitrarily complex path, consisting of a list of PathFigures.
    * A Geometry must not be modified once it has been used by a Shape.
    * However, a Geometry may be shared by multiple Shapes.
    */
    class Geometry {
        /**
        * Construct an empty Geometry.
        * The geometry type must be one of the following values:
        * Geometry#Line, Geometry#Ellipse, Geometry#Rectangle, Geometry#Path.
        * @param {EnumValue=} type If not supplied, the default Geometry type is Geometry#Path.*/
        constructor(type?: EnumValue);
        /**Gets a rectangle that contains all points within the Geometry.*/
        bounds: Rect;
        /**Gets or sets the ending X coordinate of the Geometry if it is of type #Line, #Rectangle, or #Ellipse.*/
        endX: number;
        /**Gets or sets the ending Y coordinate of the Geometry if it is of type #Line, #Rectangle, or #Ellipse.*/
        endY: number;
        /**Gets or sets the List of PathFigures that describes the content of the path for Geometries of type #Path.*/
        figures: List;
        /**Gets or sets the spot to use when the Shape#spot1 value is Spot#Default.*/
        spot1: Spot;
        /**Gets or sets the spot to use when the Shape#spot2 value is Spot#Default.*/
        spot2: Spot;
        /**Gets or sets the starting X coordinate of the Geometry if it is of type #Line, #Rectangle, or #Ellipse.*/
        startX: number;
        /**Gets or sets the starting Y coordinate of the Geometry if it is of type #Line, #Rectangle, or #Ellipse.*/
        startY: number;
        /**Gets or sets the type of the Geometry.*/
        type: EnumValue;
        /**Computes the Geometry's bounds without adding an origin point, and returns those bounds as a rect.*/
        computeBoundsWithoutOrigin(): Rect;
        /**Create a copy of this Geometry, with the same values and figures.*/
        copy(): Rect;
        /**
        * Given a SVG or GoJS path string, returns a congruent path string with each pathfigure filled.
        * For instance, "M0 0 L22 22 L33 0" would become "F M0 0 L22 22 L33 0".
        * @param {string} str
        */
        static fillPath(str: string): string;
        /**Normalizes the Geometry points in place by ensuring the top-left bounds of the geometry lines up with (0, 0), returning the Point (x, y) amount it was shifted.*/
        normalize(): Point;
        /**
        * Offsets the Geometry in place by a given (x, y) amount
        * @param {number} x The x-axis offset factor.
        * @param {number} y The y-axis offset factor.
        */
        offset(x: number, y: number);
        /**
        * Produce a Geometry from a string that uses an SVG-like compact path geometry syntax.
        * @param {string} str
        * @param {boolean=} filled whether figures should be filled.
        * If true, all PathFigures in the string will be filled regardless of the presence
        * of an "F" command or not.
        * If false, all PathFigures will determine their own filled state by the presence of an "F" command or not.
        * Default is false.
        */
        static parse(str: string, filled?: boolean): Geometry;
        /**
        * Rotates the Geometry in place by a given angle, with optional x and y values to rotate the geometry about.
        * If no x and y value are giving, (0, 0) is used as the rotation point.
        * @param {number} angle The angle to rotate by.
        * @param {number=} x The optional X point to rotate the geometry about. If no point is given, this value is 0.
        * @param {number=} y The optional Y point to rotate the geometry about. If no point is given, this value is 0.
        */
        rotate(angle: number, x?: number, y?: number);
        /**
        * Scales the Geometry in place by a given (x, y) scale factor
        * @param {number} x The x-axis scale factor.
        * @param {number} y The y-axis scale factor.
        */
        scale(x: number, y: number);
        /**
        * This static method can be used to write out a Geometry as a string
        * that can be read by Geometry.parse.
        * The string produced by this method is a superset of the SVG path
        * string rules that contains some additional GoJS-specific tokens.
        * See the <a href="../../intro/pictures.html">Introduction page on Geometry Parsing</a> for more details.
        * @param {Geometry} val
        */
        static stringify(val: Geometry): string;
        /**For drawing an ellipse fitting within a rectangle; a value for Geometry#type.*/
        Ellipse: EnumValue;
        /**For drawing a simple straight line; a value for Geometry#type.*/
        Line: EnumValue;
        /**For drawing a complex path made of a list of PathFigures; a value for Geometry#type.*/
        Path: EnumValue;
        /**For drawing a rectangle; a value for Geometry#type.*/
        Rectangle: EnumValue;
    }
    /**
    * A Margin represents a band of space outside or inside a rectangular area,
    * with possibly different values on each of the four sides.
    */
    class Margin {
        /**
        * If zero arguments are supplied, zero is used for all four sides.
        * If one argument is supplied, that number is used for all four sides.
        * If two arguments are supplied, the top and bottom sides get the first value,
        * and the left and right sides get the second value.
        * Otherwise there must be four arguments, in the order: top, right, bottom, left.
        * @param {number=} t the margin for the top side;
        *                    if not supplied, all sides are zero.
        * @param {number=} r the margin for the right side;
        *                    if not supplied, all sides have the value of the first argument.
        * @param {number=} b the margin for all bottom side;
        *                    if not supplied, the top and bottom get the value of the first argument,
        *                    and the right and left sides get the value of the second argument.
        * @param {number=} l the margin for the left side;
        *                    must be supplied if the third argument was supplied.*/
        constructor(t?: number, r?: number, b?: number, l?: number);
        /**Gets or sets the bottom value of this margin.*/
        bottom: number;
        /**Gets or sets the left value of this margin.*/
        left: number;
        /**Gets or sets the right value of this margin.*/
        right: number;
        /**Gets or sets the top value of this margin.*/
        top: number;
        /**Create a copy of this Margin, with the same values.*/
        copy(): Margin;
        /**
        * Indicates whether the given Margin is equal to this Margin.
        * @param {Margin} m The Margin to compare to this Margin.
        */
        equals(m: Margin): boolean;
        /**
        * Indicates whether the given margin is equal to this Margin.
        * @param {number} t top.
        * @param {number} r right.
        * @param {number} b bottom.
        * @param {number} l left.
        */
        equalTo(t: number, r: number, b: number, l: number): boolean;
        /**True if this Margin has values that are real numbers and not infinity.*/
        isReal(): boolean;
        /**
        * This static method can be used to read in a Point from a string that was produced by Point.stringify.
        * @param {string} str
        */
        static parse(str: string): Margin;
        /**
        * Replace the transformation matrix of this Transform with those of another Transform.
        * @param {Transform} t the other Transform from which to copy the transformation matrix.
        */
        set(m: Margin): Margin;
        /**
        * Modify this Size with new Width and Height values.
        * @param {number} w the width.
        * @param {number} h the height.
        */
        setTo(t: number, r: number, b: number, l: number): Margin;
        /**
        * This static method can be used to write out a Size as a string that can be read by Size.parse.
        * @param {Size} val
        */
        static stringify(val: Margin): string;
    }
    /**
    * A PathFigure represents a section of a Geometry}.
    * It is a single connected series of
    * two-dimensional geometric PathSegment}s.
    */
    class PathFigure {
        /**
        * Constructs an empty figure.
        * The optional arguments specify the starting point of the figure.
        * You'll want to add a new instance of a PathFigure to the
        * Geometry#figures list of a Geometry.
        * @param {number=} sx optional: the X coordinate of the start point (default is zero).
        * @param {number=} sy optional: the Y coordinate of the start point (default is zero).
        * @param {boolean=} filled optional: whether the figure is filled (default is true).*/
        constructor(sx?: number, sy?: number, filled?: boolean);
        /**Gets or sets whether this PathFigure is drawn filled.*/
        isFilled: boolean;
        /**Gets or sets whether this PathFigure will render a shadow if one is defined.*/
        isShadowed: boolean;
        /**Gets or sets the List of PathSegments that define this PathFigure.*/
        segments: List;
        /**Gets or sets the starting point X coordinate of the PathFigure.*/
        startX: number;
        /**Gets or sets the starting point Y coordinate of the PathFigure.*/
        startY: number;
        /**Create a copy of this PathFigure, with the same values and segments.*/
        copy(): PathFigure;
    }
    /**
    * A PathSegment represents a straight line or curved segment of a path between
    * two or more points that are part of a PathFigure}.
    * A PathSegment must not be modified once its containing PathFigure}'s
    * Geometry} has been assigned to a Shape}.
    */
    class PathSegment {
        /**Constructs a segment that goes nowhere unless you specify some Points.
        * @param {EnumValue} type
        * @param {number=} ex optional: the X coordinate of the end point.
        * @param {number=} ey optional: the Y coordinate of the end point.
        * @param {number=} x1 optional: the X coordinate of the first bezier control point.
        * @param {number=} y1 optional: the Y coordinate of the first bezier control point.
        * @param {number=} x2 optional: the X coordinate of the second cubic bezier control point.
        * @param {number|boolean=} y2 optional: the Y coordinate of the second cubic bezier control point,
        * or the large-arc-flag of an SvgArc.
        * @param {boolean=} clockwise optional: whether an SvgArc goes clockwise or counterclockwise.*/
        constructor(type: EnumValue, ex: number, ey: number, x1: number, y1: number, x2: number, y2: number, clockwise: boolean);
        /**Gets or sets the center X value of the Arc for a PathSegment of type #Arc.*/
        centerX: number;
        /**Gets or sets the center Y value of the Arc for a PathSegment of type #Arc.*/
        centerY: number;
        /**Gets or sets the X coordinate of the end point for all kinds of PathSegment.*/
        endX: number;
        /**Gets or sets the Y coordinate of the end point for all kinds of PathSegment.*/
        endY: number;
        /**Gets or sets the sweep-flag for a PathSegment of type #SvgArc.*/
        isClockwiseArc: boolean;
        /**Gets or sets whether the path is closed afer this PathSegment.*/
        isClosed: boolean;
        /**Gets or sets the large-arc-flag for a PathSegment of type #SvgArc.*/
        isLargeArc: boolean;
        /**Gets or sets the X value of the first control point for a PathSegment of type #Bezier or #QuadraticBezier.*/
        point1X: number;
        /**Gets or sets the Y value of the first control point for a PathSegment of type #Bezier or #QuadraticBezier.*/
        point1Y: number;
        /**Gets or sets the X value of the second control point for a PathSegment of type cubic #Bezier.*/
        point2X: number;
        /**Gets or sets the Y value of the second control point for a PathSegment of type cubic #Bezier.*/
        point2Y: number;
        /**Gets or sets the X value of the radius for a PathSegment of type #Arc.*/
        radiusX: number;
        /**Gets or sets the Y value of the radius for a PathSegment of type #Arc.*/
        radiusY: number;
        /**Gets or sets the starting angle for a PathSegment of type #Arc.*/
        startAngle: number;
        /**Gets or sets the length of angle in degrees, or amount of arc to "sweep" for a PathSegment of type #Arc.*/
        sweepAngle: number;
        /**Gets or sets the type of the PathSegment.*/
        type: EnumValue;
        /**Gets or sets the X-axis rotation for a PathSegment of type #SvgArc.*/
        xAxisRotation: number;
        /**Closes the path after this PathSegment*/
        close(): PathSegment;
        /**Closes the path after this PathSegment*/
        copy(): PathSegment;
        /**For drawing an arc segment, a value for PathSegment#type.*/
        Arc: EnumValue;
        /**For drawing a cubic bezier segment, a value for PathSegment#type.*/
        Bezier: EnumValue;
        /**For drawing a straight line segment, a value for PathSegment#type.*/
        Line: EnumValue;
        /**For beginning a new subpath, a value for PathSegment#type.*/
        Move: EnumValue;
        /**For drawing a quadratic bezier segment, a value for PathSegment#type.*/
        QuadraticBezier: EnumValue;
        /**For drawing an SVG arc segment, a value for PathSegment#type.*/
        SvgArc: EnumValue;
    }
    /**
    * A Rect describes a rectangular two-dimensional area as a top-left point (x and y values)
    * and a size (width and height values).
    */
    class Rect {
        /**
         * There are four constructors: (), (Point, Point), (Point, Size),
         * and four numbers for (x, y, width, height).
         * The default constructor (no argument) results in a Rect(0,0,0,0).
         * @param {Point|number=} x Top-left Point, or x value.
         * @param {Point|Size|number=} y Bottom-right Point or Size or y value.
         * @param {number=} w Width to be used if x,y are specified
         * must be non-negative.
         * @param {number=} h Height to be used if x,y are specified;
         * must be non-negative.*/
        constructor(x: Point, y: Point); 
        constructor(x: Point, y: Size); 
        constructor(x?: number, y?: number, w?: number, h?: number);
        /**Gets or sets the y-axis value of the bottom of the Rect.*/
        bottom: number;
        /**Gets or sets the Point at the center of this Rect.*/
        center: Point;
        /**Gets or sets the horizontal center X coordinate of the Rect.*/
        centerX: number;
        /**Gets or sets the vertical center Y coordinate of the Rect.*/
        centerY: number;
        /**Gets or sets the height of the Rect.*/
        height: number;
        /**Gets or sets the leftmost value of the Rect.*/
        left: number;
        /**Gets or sets the x- and y-axis position of the Rect as a Point.*/
        position: Point;
        /**Gets or sets the x-axis value of the right of the Rect.*/
        right: number;
        /**Gets or sets the width and height of the Rect as a Size.*/
        size: Size;
        /**Gets or sets the topmost value of the Rect.*/
        top: number;
        /**Gets or sets the width of the Rect.*/
        width: number;
        /**Gets or sets the top-left x coordinate of the Rect.*/
        x: number;
        /**Gets or sets the top-left y coordinate of the Rect.*/
        y: number;
        /**
        * Modify this Rect by adding the given Margin to each side of the Rect.
        * @param {Margin} m The Margin to add to the Rect.
        */
        addMargin(m): Rect;
        /**
        * Indicates whether this Rect contains the given Point/Rect.
        * @param {number} x The X coordinate of the Point or Rect to include in the new bounds.
        * @param {number} y The Y coordinate of the Point or Rect to include in the new bounds.
        * @param {number=} w The Width of the Rect to include in the new bounds, defaults to zero.
        * @param {number=} h The Height of the Rect to include in the new bounds, defaults to zero.
        * false otherwise.
        */
        contains(x: number, y: number, w?: number, h?: number): boolean;
        /**
        * This static method indicates whether a Rect contains the given Point/Rect.
        * @param {number} rx The X coordinate of a Rect.
        * @param {number} ry The Y coordinate of a Rect.
        * @param {number} rw The Width of a Rect.
        * @param {number} rh The Height of a Rect.
        * @param {number} x The X coordinate of the Point or Rect that might be in the bounds (RX, RY, RW, RH).
        * @param {number} y The Y coordinate of the Point or Rect that might be in the bounds (RX, RY, RW, RH).
        * @param {number=} w The Width of the Rect to include in the new bounds, defaults to zero.
        * @param {number=} h The Height of the Rect to include in the new bounds, defaults to zero.
        * false otherwise.
        */
        static contains(rx: number, ry: number, rw: number, rh: number, x: number, y: number, w?: number, h?: number): boolean;
        /**
        * Indicates whether this Rect contains the given Point.
        * @param {Point} p The Point to check.
        * false otherwise.
        */
        containsPoint(p: Point): boolean;
        /**
        * Indicates whether this Rect contains the given Rect.
        * @param {Rect} r The Rect to check.
        * false otherwise.
        */
        containsRect(r: Rect): boolean;
        /**Create a copy of this Rect, with the same values.*/
        copy(): Rect;
        /**
        * Indicates whether the given Rect is equal to the current Rect.
        * @param {Rect} r The rectangle to compare to the current rectangle.
        * and height.
        */
        equals(r: Rect): boolean;
        /**
        * Indicates whether the given Rect is equal to the current Rect.
        * @param {number} x
        * @param {number} y
        * @param {number} w the width.
        * @param {number} h the height.
        */
        equalTo(x: number, y: number, w: number, h: number): boolean;
        /**
        * Modifies this Rect by adding some distance to each side of the Rect.
        * @param {number} t the amount to move the top side upwards; may be negative.
        * @param {number} r the amount to move the right side rightwards; may be negative.
        * @param {number} b the amount to move the bottom side downwards; may be negative.
        * @param {number} l the amount to move the left side leftwards; may be negative.
        */
        grow(t: number, r: number, b: number, l: number): Rect;
        /**
        * Modify this Rect so that its width and height are changed on all four sides,
        * equally on the left and right sides, and equally on the top and bottom sides.
        * When the arguments are negative, this operation deflates this Rect, but not beyond zero.
        * @param {number} w The additional width on each side, left and right; may be negative.
        * @param {number} h The additional height on each side, top and bottom; may be negative.
        */
        inflate(w: number, h: number): Rect;
        /**
        * Modify this Rect so that it is the intersection of this Rect and the rectangle
        * defined by x, y, w, h.
        * @param {number} x
        * @param {number} y
        * @param {number} w
        * @param {number} h
        */
        intersect(x: number, y: number, w: number, h: number): Rect;
        /**
        * Modify this Rect so that it is the intersection of this Rect and the given Rect.
        * @param {Rect} r Rect to intersect with.
        */
        intersectRect(r: Rect): Rect;
        /**
        * This static method indicates whether a Rect partly or wholly overlaps the given Rect.
        * @param {number} rx The X coordinate of a Rect.
        * @param {number} ry The Y coordinate of a Rect.
        * @param {number} rw The Width of a Rect.
        * @param {number} rh The Height of a Rect.
        * @param {number} x The X coordinate of the Point or Rect that might overlap the bounds (RX, RY, RW, RH).
        * @param {number} y The Y coordinate of the Point or Rect that might overlap the bounds (RX, RY, RW, RH).
        * @param {number} w
        * @param {number} h
        */
        static intersects(rx: number, ry: number, rw: number, rh: number, x: number, y: number, w: number, h: number): boolean;
        /**
        * Determine if this Rect partly or wholly overlaps the rectangle
        * defined by x, y, w, h.
        * @param {number} x
        * @param {number} y
        * @param {number} w
        * @param {number} h
        */
        intersects(x: number, y: number, w: number, h: number): boolean;
        /**
        * Determine if a given Rect is partly or wholly inside of this Rect.
        * @param {Rect} r Rect to test intersection with.
        */
        intersectsRect(r: Rect): boolean;
        /**True if this Rect has a Width and Height of zero.*/
        isEmpty(): boolean;
        /**True if this Rect has X, Y, Width, and Height values that are real numbers and not infinity.*/
        isReal(): boolean;
        /**
        * Modify this Rect by shifting its values with the given DX and DY offsets.
        * @param {number} dx
        * @param {number} dy
        */
        offset(dx: number, dy: number): Rect;
        /**This static method can be used to read in a Rect from a string that was produced by Rect.stringify.*/
        static parse(str: string): Rect;
        /**
        * Modify this Rect so that its X, Y, Width, and Height values are the same as the given Rect.
        * @param {Rect} r the given Rect.
        */
        set(r: Rect): Rect;
        /**
        * Modify this Rect so that its X and Y values are the same as the given Point.
        * @param {Point} p the given Point.
        */
        setPoint(p: Point): Rect;
        /**
        * Modify this Rect so that its Width and Height values are the same as the given Size.
        * @param {Size} s the given Size.
        */
        setSize(s: Size): Rect;
        /**
        * Modify this Rect so that a given Spot is at a given (x,y) point using this Rect's size.
        * Return this rectangle for which the spot is at that point, without modifying the size.
        * The result is meaningless if Spot#isNoSpot is true.
        * @param {number} x the point where the spot should be.
        * @param {number} y the point where the spot should be.
        * @param {Spot} spot a Spot; Spot#isSpot must be true.
        */
        setSpot(x: number, y: number, spot: Spot): Rect;
        /**
        * Modify this Rect with new X, Y, Width, and Height values.
        * @param {number} x
        * @param {number} y
        * @param {number} w the width.
        * @param {number} h the height.
        */
        setTo(x: number, y: number, w: number, h: number): Rect;
        /**This static method can be used to write out a Rect as a string that can be read by Rect.parse.*/
        static stringify(val: Rect): string;
        /**
        * Modify this Rect by subtracting the given Margin from each side of the Rect.
        * @param {Margin} m The Margin to subtract from the Rect.
        */
        subtractMargin(m: Margin): Rect;
        /**
        * Modify this Rect to be exactly big enough to contain both the original Rect and the given rectangular area.
        * @param {number} x The X coordinate of the Point or Rect to include in the new bounds.
        * @param {number} y The Y coordinate of the Point or Rect to include in the new bounds.
        * @param {number=} w The Width of the Rect to include in the new bounds, defaults to zero.
        * @param {number=} h The Height of the Rect to include in the new bounds, defaults to zero.
        */
        union(x: number, y: number, w?: number, h?: number): Rect;
        /**
        * Modify this Rect to be exactly big enough to contain both the original Rect and the given Point.
        * @param {Point} p The Point to include in the new bounds.
        */
        unionPoint(p: Point): Rect;
        /**
        * Modify this Rect to be exactly big enough to contain this Rect and the given Rect.
        * 
        * @param {Rect} r The Rect to include in the new bounds.
        */
        unionRect(r: Rect): Rect;
    }
    /**
    * A Point represents an x- and y-coordinate pair in two-dimensional space.
    */
    class Point {
        /**The default constructor produces the Point(0,0).
        * @param {number} x
        * @param {number} y
        */
        constructor(); 
        constructor(x: number, y: number);
        /**Gets or sets the x value of the Point.*/
        x: number;
        /**Gets or sets the y value of the Point.*/
        y: number;
        /**
        * Modify this point so that is the sum of the current Point and the
        * x and y co-ordinates of the given Point.
        * @param {Point} p The Point to add to this Point.*/
        add(p: Point): Point;
        /**Create a copy of this Point, with the same values.*/
        copy(): Point;
        /**
        * This static method returns the angle in degrees of the line from point P to point Q.
        * @param {number} px
        * @param {number} py
        * @param {number} qx
        * @param {number} qy
        */
        static direction(px: number, py: number, qx: number, qy: number): number;
        /**
        * Compute the angle from this Point to a given (px,py) point.
        * However, if the point is the same as this Point, the direction is zero.
        * @param {number} px
        * @param {number} py*/
        direction(px: number, py: number): number;
        /**
        * Compute the angle from this Point to a given Point.
        * However, if the given Point is the same as this Point, the direction is zero.
        * @param {Point} p the other Point to which to measure the relative angle.*/
        directionPoint(p: Point): number;
        /**
        * This static method returns the square of the distance from the point P
        * to the finite line segment from point A to point B.
        * @param {number} px
        * @param {number} py
        * @param {number} ax
        * @param {number} ay
        * @param {number} bx
        * @param {number} by*/
        static distanceLineSegmentSquared(px: number, py: number, ax: number, ay: number, bx: number, by: number): number;
        /**
        * Returns the square of the distance from this point to a given point (px, py).
        * @param {number} px
        * @param {number} py*/
        distanceSquared(px: number, py: number): number;
        /**
        * This static method returns the square of the distance from the point P to the point Q.
        * @param {number} px
        * @param {number} py
        * @param {number} qx
        * @param {number} qy*/
        static distanceSquared(px: number, py: number, qx: number, qy: number): number;
        /**
        * Returns the square of the distance from this Point to a given Point.
        * @param {Point} p the other Point to measure to.*/
        distanceSquaredPoint(p: Point): number;
        /**
        * Indicates whether the given Point is equal to this Point.
        * @param {Point} p The Point to compare to the current Point.
        * false otherwise.*/
        equals(p: boolean): number;
        /**
        * Indicates whether the given point (x, y) is equal to this Point.
        * @param {number} x
        * @param {number} y
        * false otherwise.*/
        equalTo(x: number, y: number): boolean;
        /**
        * True if this Point has X and Y values that are real numbers and not infinity.
        * */
        isReal(): boolean;
        /**
        * Modify this Point so that its X and Y values have been normalized to a unit length.
        * However, if this Point is the origin (zero, zero), its length remains zero.
        * */
        normalize(): Point;
        /**
        * Modify this point by shifting its values with the given DX and DY offsets.
        * @param {number} dx
        * @param {number} dy*/
        offset(dx: number, dy: number): Point;
        /**
        * This static method can be used to read in a Size from a string that was produced by Size.stringify.
        * @param {string} str*/
        static parse(str: string): Point;
        /**
        * Modify this Point so that has been rotated about the origin by the given angle.
        * @param {number} angle an angle in degrees.*/
        rotate(angle: number): Point;
        /**
        * Modify this Point so that its X and Y values have been scaled by given factors along the X and Y axes.
        * @param {number} sx
        * @param {number} sy*/
        scale(sx: number, sy: number): Point;
        /**
        * Modify this Point so that its X and Y values are the same as the given Point.
        * 
        * @param {Point} p the given Point.*/
        set(p: Point): Point;
        /**
        * Modify this Point so that its X and Y values correspond to a particular Spot
        * in a given Rect.
        * The result is meaningless if Spot#isNoSpot is true for the given Spot.
        * @param {Rect} r the Rect for which we are finding the point.
        * @param {Spot} spot the Spot; Spot#isSpot must be true for this Spot.*/
        setRectSpot(r: Rect, spot: Spot): Point;
        /**
        * Modify this Point so that its X and Y values correspond to a particular Spot
        * in a given rectangle.
        * The result is meaningless if Spot#isNoSpot is true for the given Spot.
        * @param {number} x The X coordinate of the Rect for which we are finding the point.
        * @param {number} y The Y coordinate of the Rect for which we are finding the point.
        * @param {number} w The Width of the Rect for which we are finding the point.
        * @param {number} h The Height of the Rect for which we are finding the point.
        * @param {Spot} spot the Spot; Spot#isSpot must be true for this Spot.*/
        setSpot(x: number, y: number, w: number, h: number, spot: Spot): Point;
        /**
        * Modify this Point with new X and Y values.
        * @param {number} x
        * @param {number} y*/
        setTo(x: number, y: number): Point;
        /**
        * This static method can be used to write out a Size as a string that can be read by Size.parse.
        * @param {Size} val*/
        static stringify(val: Point): string;
        /**
        * Modify this point so that is the difference of this Point and the
        * x and y co-ordinates of the given Point.
        * @param {Point} p The Point to subtract from the current Point.*/
        subtract(p: Point): Point;
    }
    /**
    * A Size describes a width and a height in two-dimensional coordinates.
    * The width and height must both be non-negative.
    */
    class Size {
        /**The default constructor produces the Size(0,0).
        * @param {number} w
        * @param {number} h
        */
        constructor(); 
        constructor(w: number, h: number);
        /**Gets or sets the height value of the Size.*/
        height: number;
        /**Gets or sets the width value of the Size.*/
        width: number;
        /**Create a copy of this Size, with the same values.*/
        copy(): Size;
        /**
        * Indicates whether the given Size is equal to the current Size.
        * @param {Size} s The Size to compare to the current Size.
        * false otherwise.
        */
        equals(s: Size): boolean;
        /**
        * Indicates whether the given size is equal to this Size.
        * @param {number} w the width.
        * @param {number} h the height.
        * false otherwise.
        */
        equalTo(w: number, h: number): boolean;
        isReal(): boolean;
        static parse(str: string): Size;
        /**
        * Modify this Size so that its Width and Height values are the same as the given Size.
        * @param {Size} s the given Size.
        */
        set(s: Size): Size;
        /**
        * Modify this Size with new Width and Height values.
        * @param {number} w the width.
        * @param {number} h the height.
        */
        setTo(w: number, h: number): Size;
        static stringify(val: Size): string;
    }
        /**
        * A Spot represents a relative point from(0, 0) to(1, 1) within the bounds of
        * a rectangular area plus an absolute offset.
        */
    class Spot {
        /**The default constructor produces the Spot(0, 0, 0, 0), at the top-left corner.
        * @param {number} x
        * @param {number} y
        * @param {number} offx
        * @param {number} offy
        */
        constructor();
        constructor(x: number, y: number); 
        constructor(x: number, y: number, offx: number, offy: number);
        /**Gets or sets the offsetX value of the Spot.*/
        offsetX: number;
        /**Gets or sets the offsetY value of the Spot.*/
        offsetY: number;
        /**Gets or sets the x value of the Spot, a fractional value between zero and one.*/
        x: number;
        /**Gets or sets the y value of the Spot, a fractional value between zero and one.*/
        y: number;
        /**Create a copy of this Spot, with the same values.*/
        copy(): Spot;
        /**
        * Two spots are equal if all four property values are the same.
        * @param {Spot} spot The Spot to compare to the current Spot.*/
        equals(spot: Spot): boolean;
        /**
        * This predicate is true if this Spot is a side that
        * includes the side(s) given by the argument Spot.
        * @param {Spot} side*/
        includesSide(side: Spot): boolean;
        /**True if this is a special spot referring to the default spot.*/
        isDefault(): boolean;
        /**True if this is an unspecific special spot, such as Spot#None or one of the sides.*/
        isNoSpot(): boolean;
        /**True if this is a special spot referring to one (or more) of the sides.*/
        isSide(): boolean;
        /**True if this is a specific spot, not a side nor Spot#None.*/
        isSpot(): boolean;
        /**Return a new spot that is opposite this spot.*/
        opposite(): Spot;
        /**This static method can be used to read in a Spot from a string that was produced by Spot.stringify.*/
        static parse(str: string): Spot;
        /**
        * Modify this Spot so that its X, Y, OffsetX, and OffsetY values are the same as the given Spot.
        * 
        * @param {Spot} s the given Spot.*/
        set(s: Spot): Spot;
        /**
        * Modify this Spot with new X, Y, OffsetX, and OffsetY values.
        * @param {number} x
        * @param {number} y
        * @param {number} offx
        * @param {number} offy*/
        setTo(x: number, y: number, offx: number, offy: number): Spot;
        /**This static method can be used to write out a Spot as a string that can be read by Spot.parse.*/
        static stringify(val: Spot): string;
        /**The set of points on all sides of the bounding rectangle.*/
        static AllSides: Spot;
        /**A synonym for Spot#BottomCenter.*/
        static Bottom: Spot;
        /**The specific point at the middle of the bottom side of bounding rectangle.*/
        static BottomCenter: Spot;
        /**The specific point at the bottom-left corner of the bounding rectangle.*/
        static BottomLeft: Spot;
        /**The set of points at the left or bottom sides of the bounding rectangle.*/
        static BottomLeftSides: Spot;
        /**The specific point at the bottom-right corner of the bounding rectangle.*/
        static BottomRight: Spot;
        /**The set of points at the right or bottom sides of the bounding rectangle.*/
        static BottomRightSides: Spot;
        /**The set of points at the bottom side of the bounding rectangle.*/
        static BottomSide: Spot;
        /**The specific point at the very center of the bounding rectangle.*/
        static Center: Spot;
        /**Use this value to indicate that the real spot value is inherited from elsewhere.*/
        static Default: Spot;
        /**A synonym for Spot#LeftCenter.*/
        static Left: Spot;
        /**The specific point at the middle of the left side of bounding rectangle.*/
        static LeftCenter: Spot;
        /**The set of points at the left or right sides of the bounding rectangle.*/
        static LeftRightSides: Spot;
        /**The set of points at the left side of the bounding rectangle.*/
        static LeftSide: Spot;
        /**A synonym for Spot#BottomCenter.*/
        static MiddleBottom: Spot;
        /**A synonym for Spot#LeftCenter.*/
        static MiddleLeft: Spot;
        /**A synonym for Spot#RightCenter.*/
        static MiddleRight: Spot;
        /**A synonym for Spot#TopCenter.*/
        static MiddleTop: Spot;
        /**Use this Spot value to indicate no particular spot -- code looking for a particular point on an element will need to do their own calculations to determine the desired point depending on the circumstances.*/
        static None: Spot;
        /**The set of points on all sides of bounding rectangle except bottom side.*/
        static NotBottomSide: Spot;
        /**The set of points on all sides of the bounding rectangle except left side.*/
        static NotLeftSide: Spot;
        /**The set of points on all sides of the bounding rectangle except right side.*/
        static NotRightSide: Spot;
        /**The set of points on all sides of the bounding rectangle except top side.*/
        static NotTopSide: Spot;
        /**A synonym for Spot#RightCenter.*/
        static Right: Spot;
        /**The specific point at the middle of the right side of bounding rectangle.*/
        static RightCenter: Spot;
        /**The set of points at the right side of the bounding rectangle.*/
        static RightSide: Spot;
        /**A synonym for Spot#TopCenter.*/
        static Top: Spot;
        /**The set of points at the top or bottom sides of the bounding rectangle.*/
        static TopBottomSides: Spot;
        /**The specific point at the center of the top side of the bounding rectangle.*/
        static TopCenter: Spot;
        /**The specific point at the top-left corner of the bounding rectangle.*/
        static TopLeft: Spot;
        /**The set of points at the top or left sides of the bounding rectangle.*/
        static TopLeftSides: Spot;
        /**The specific point at the top-right corner of the bounding rectangle.*/
        static TopRight: Spot;
        /**The set of points at the top or right sides of the bounding rectangle.*/
        static TopRightSides: Spot;
        /**The set of points at the top side of the bounding rectangle.*/
        static TopSide: Spot;
    }
    /**
    * A Binding describes how to automatically set a property on a GraphObject}
    * to a value of a property of data in the model.
    * The target property name and the data source property name are strings.
    * All name matching is case-sensitive.
    */
    class Binding {
        /**The constructor creates an empty one-way binding.
        * @param {string=} targetprop A string naming the target property on the target object.
        *   If this is the empty string or not supplied, the whole {@link GraphObject} is used in the call to the conversion function,
        *   which should modify the {@link GraphObject} directly.
        * @param {string=} sourceprop A string naming the source property on the bound data object.
        *   If this is the empty string, the whole {@link Panel#data} object is used.
        *   If this argument is not supplied, the source property is assumed to be the same as the target property.
        * @param {function(*,*=) | null=} conv A function converting the data property value to the value to set the target property.
        *   If the function is null or not supplied, no conversion takes place.*/
        constructor(targetprop?: string, sourceprop?: string, conv?: (a: any, b?: any) => any);
        /**Gets or sets a converter function to apply to the GraphObject property value in order to produce the value to set to a data property.*/
        backConverter: (a: any, b?: any) => any;
        /**Gets or sets a converter function to apply to the data property value in order to produce the value to set to the target property.*/
        converter: (a: any, b?: any) => any;
        /**Gets or sets the directions and frequency in which the binding may be evaluated.*/
        mode: EnumValue;
        /**Gets or sets the name of the GraphObject that should act as a source object whose property should be gotten by this data binding.*/
        sourceName: (a: any, b?: any) => any;
        /**Gets or sets the name of the property to get from the bound data object, the value of Panel#data.*/
        sourceProperty: string;
        /**Gets or sets the name of the property to be set on the target GraphObject.*/
        targetProperty: string;
        /**
        * Modify this Binding to set its #mode to be Binding#TwoWay, and
        * provide an optional conversion function to convert GraphObject property
        * values back to data values.
        * 
        * You should not have a TwoWay binding on a node data object's key property.
        * @param {function(*,*=) | null=} backconv*/
        makeTwoWay(backconv?: (a: any, b?: any) => any): Binding;
        /**
        * Modify this Binding to set its #sourceName property so as to identify
        * a GraphObject in the visual tree of the bound Panel.
        * @param {string=} srcname the GraphObject#name of an element in the visual tree of the bound Panel;
        * use an empty string to refer to the root panel of that visual tree.*/
        ofObject(srcname?: string): Binding;
        /**This static method can be used to create a function that parses a string into an enumerated value, given the class that the enumeration values are defined on and a default value if the string cannot be parsed successfully.*/
        static parseEnum(ctor: (...args: any[]) => any, defval: EnumValue): (a: string) => EnumValue; 
        /**This static method can be used to convert an object to a string, looking for commonly defined data properties, such as "text", "name", "key", or "id".*/
        static toString(val: any): string;
        /**This value for Binding#mode uses data source values and sets GraphObject properties.*/
        static OneWay: EnumValue; 
        /**This value for Binding#mode uses data source values and GraphObject properties and keeps them in sync.*/
        static TwoWay: EnumValue; 
    }
    /**
    * A ChangedEvent represents a change to an object, typically a GraphObject,
    * but also for model data, a Model, or a Diagram.
    * The most common case is for remembering the name of a property
    * and the before-and-after values for that property.
    * You can listen for changed events on the model using Model#addChangedListener
    * and on the Diagram using Diagram#addChangedListener.
    * 
    */
    class ChangedEvent {
        /**The ChangedEvent class constructor produces an empty ChangedEvent object.*/
        constructor();
        /**Gets or sets the nature of change that occurred.*/
        change: EnumValue;
        /**Gets or sets the Diagram that was modified.*/
        diagram: Diagram;
        /**Gets or sets the Model or TreeModel or GraphLinksModel that was modified.*/
        model: Model;
        /**Gets the name of the model change, reflecting a change to model data in addition to a change to the model itself.*/
        modelChange: string;
        /**Gets or sets an optional value associated with the new value.*/
        newParam: any;
        /**Gets or sets the next or current value that the property has.*/
        newValue: any;
        /**Gets or sets the Object that was modified.*/
        object: Object;
        /**Gets or sets an optional value associated with the old value.*/
        oldParam: any;
        /**Gets or sets the previous or old value that the property had.*/
        oldValue: any;
        /**Gets or sets the name of the property change.*/
        propertyName: any;
        /**This predicate returns true if you can call redo().*/
        canRedo(): boolean;
        /**This predicate returns true if you can call undo().*/
        canUndo: boolean;
        /**Forget any object references that this ChangedEvent may have.*/
        clear();
        /**Make a copy of this ChangedEvent.*/
        copy(): ChangedEvent;
        /**
        * This is a convenient method to get the right parameter value, depending on the value of undo,
        * when implementing a state change as part of an undo or a redo.
        * @param {boolean} undo If true, returns the oldParam, otherwise returns the newParam.*/
        getParam(undo: boolean): any;
        /**
        * This is a convenient method to get the right value, depending on the value of undo,
        * when implementing a state change as part of an undo or a redo.
        * @param {boolean} undo If true, returns the oldValue, otherwise returns the newValue.*/
        getValue(undo: boolean): any;
        /**Re-perform this object change after an undo().*/
        redo();
        /**Reverse the effects of this object change.*/
        undo();
        /**For inserting into collections, and used as the value for ChangedEvent#change.*/
        static Insert: EnumValue; 
        /**For simple property changes, and used as the value for ChangedEvent#change.*/
        static Property: EnumValue; 
        /**For removing from collections, and used as the value for ChangedEvent#change.*/
        static Remove: EnumValue; 
        /**For informational events, such as transactions and undo/redo operations, and used as the value for ChangedEvent#change.*/
        static Transaction: EnumValue; 
    }
    /**
    * GraphLinksModels support links between nodes and grouping nodes and links into subgraphs.
    * GraphLinksModels hold node data and link data in separate arrays.
    * Node data is normally represented in a Diagram by instances of Node,
    * but they could be represented by simple Parts or by Groups.
    * Link data should be represented by instances of Link.
    */
    class GraphLinksModel extends Model {
        /**This constructs an empty GraphLinksModel unless one provides arguments as the initial data array values for the Model#nodeDataArray and GraphLinksModel#linkDataArray properties.
        * @param {Array=} nodedataarray an optional Array containing JavaScript objects to be represented by Nodes.
        * @param {Array=} linkdataarray an optional Array containing JavaScript objects to be represented by Links.
        */
        constructor(nodedataarray?: Array[], linkdataarray?: Array[]);
        /**Gets or sets a data object that will be copied and added to the model as a new node data each time there is a link reference (either the "to" or the "from" of a link data) to a node key that does not yet exist in the model.*/
        archetypeNodeData: Object;
        /**Gets or sets a function that makes a copy of a link data object.*/
        copyLinkDataFunction: (obj: Object, a: GraphLinksModel) => any;
        /**Gets or sets the name of the data property that returns a string describing that data's category, or a function that takes a link data object and returns that category string; the default value is the name 'category'.*/
        linkCategoryProperty: any;
        /**Gets or sets the array of link data objects that correspond to Links in the Diagram.*/
        linkDataArray: Array<Object>;
        /**
        * Gets or sets the name of the data property that returns
        * the key of the node data that the link data is coming from,
        * or a function that takes a link data object and returns that key;
        * the default value is the name 'from'.
        * The name must not be null.
        * If the value is an empty string,
        * #getFromKeyForLinkData will return undefined for all link data objects.
        */
        linkFromKeyProperty: any;
        /**Gets or sets the name of the data property that returns the optional parameter naming a "port" element on the node that the link data is connected from, or a function that takes a link data object and returns that string.*/
        linkFromPortIdProperty: any; 
        /**Gets or sets the name of the data property that returns an array of keys of node data that are labels on that link data, or a function that takes a link data object and returns such an array; the default value is the empty string: ''.*/
        linkLabelKeysProperty: any;
        /**Gets or sets the name of the data property that returns the key of the node data that the link data is going to, or a function that takes a link data object and returns that key; the default value is the name 'to'.*/
        linkToKeyProperty: any;
        /**Gets or sets the name of the data property that returns the optional parameter naming a "port" element on the node that the link data is connected to, or a function that takes a link data object and returns that string.*/
        linkToPortIdProperty: any;
        /**Gets or sets the name of the property on node data that specifies the string or number key of the group data that "owns" that node data, or a function that takes a node data object and returns that group key.*/
        nodeGroupKeyProperty: any;
        /**Gets or sets the name of the boolean property on node data that indicates whether the data should be represented as a group of nodes and links or as a simple node, or a function that takes a node data object and returns true or false; the default value is the name 'isGroup'.*/
        nodeIsGroupProperty: any;
        /**Gets or sets the name of the boolean property on node data that indicates whether the data should be represented as a node acting as a label on a link instead of being a regular node, or a function that takes a node data object and returns true or false; the default value is the empty string: ''.*/
        nodeIsLinkLabelProperty: any;
        /**
        * Adds a node key value that identifies a node data acting as a new label node on the given link data.
        * This method only works if #linkLabelKeysProperty has been set to something other than an empty string.
        * @param {Object} linkdata a JavaScript object representing a link.
        * @param {number|string} key a number or string that is the key of the new label node.*/
        addLabelKeyForLinkData(linkdata: Object, key: any);
        /**
        * When you want to add a link to the diagram, call this method with a new data object.
        * This will add that data to the #linkDataArray and
        * notify all listeners that a new link data object has been inserted into the collection.
        * Presumably the link data object will already have its "from" and "to" node key references set,
        * but it is also possible to set them after the link data is in the model
        * by calling #setFromKeyForLinkData and #setToKeyForLinkData.
        * This operation does nothing if the link data is already part of this model's #linkDataArray.
        * @param {Object} linkdata a JavaScript object representing a link.*/
        addLinkData(linkdata: Object);
        /**
        * Decide if a given link data is in this model.
        * @param {Object} linkdata a JavaScript object representing a link.*/
        containsLinkData(linkdata: Object): boolean;
        /**
        * Gets or sets a function that makes a copy of a link data object.
        * You may need to set this property in order to ensure that a copied Link is bound
        * to data that does not share certain data structures between the original link data and the copied link data.
        * The value may be null in order to cause #copyLinkData to make a shallow copy of a JavaScript Object.
        * The default value is null.*/
        copyLinkData:(linkdata: Object)=> Object;
        /**
        * Find the category of a given link data, a string naming the link template
        * that the Diagram should use to represent the link data.
        * @param {Object} linkdata a JavaScript object representing a link.*/
        getCategoryForLinkData(linkdata: Object): string;
        /**
        * From a link data retrieve a value uniquely identifying the node data
        * from which this link is connected.
        * @param {Object} linkdata a JavaScript object representing a link.*/
        getFromKeyForLinkData(linkdata: Object): any;
        /**
        * From a link data retrieve a value identifying the port object of the node
        * from which this link is connected.
        * @param {Object} linkdata a JavaScript object representing a link.*/
        getFromPortIdForLinkData(linkdata: Object): string;
        /**
        * If there is a container group for the given node data, return the group's key.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.*/
        getGroupKeyForNodeData(nodedata: Object): any;
        /**
        * Gets an Array of node key values that identify node data acting as labels on the given link data.
        * This method only works if #linkLabelKeysProperty has been set to something other than an empty string.
        * @param {Object} linkdata a JavaScript object representing a link.*/
        getLabelKeysForLinkData(linkdata: Object): Array;
        /**
        * From a link data retrieve a value uniquely identifying the node data
        * to which this link is connected.
        * @param {Object} linkdata a JavaScript object representing a link.*/
        getToKeyForLinkData(linkdata: Object): any;
        /**
        * From a link data retrieve a value identifying the port object of the node
        * to which this link is connected.
        * @param {Object} linkdata a JavaScript object representing a link.*/
        getToPortIdForLinkData(linkdata: Object): string;
        /**
        * See if the given node data should be represented as a group or as a simple node.
        * This value must not change as long as the node data is part of the model.
        * At the current time there is no <code>setIsGroupForNodeData</code> method.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.*/
        isGroupForNodeData(nodedata: Object): boolean;
        /**
        * See if the given node data should act as a label on a link, in order to support
        * the appearance and behavior of having links connected to links.
        * This value must not change as long as the node data is part of the model.
        * At the current time there is no <code>setIsLinkLabelForNodeData</code> method.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.*/
        isLinkLabelForNodeData(nodedata: Object): boolean;
        /**
        * Removes a node key value that identifies a node data acting as a former label node on the given link data.
        * Removing a reference to a node data from the collection of link label keys
        * does not automatically remove any node data from the model.
        * This method only works if #linkLabelKeysProperty has been set to something other than an empty string.
        * @param {Object} linkdata a JavaScript object representing a link.
        * @param {number|string} key a number or string that is the key of the label node being removed from the link.*/
        removeLabelKeyForLinkData(linkdata: Object, key: any);
        /**
        * When you want to remove a link from the diagram, call this method with an existing link data object.
        * This will remove that data from the #linkDataArray and
        * notify all listeners that a link data object has been removed from the collection.
        * Removing a link data from a model does not automatically remove
        * any associated label node data from the model. 
        * This operation does nothing if the link data is not present in the #linkDataArray.
        * @param {Object} linkdata a JavaScript object representing a link.*/
        removeLinkData(linkdata: Object);
        /**
        * Change the category of a given link data, a string naming the link template
        * that the Diagram should use to represent the link data.
        * Changing the link template for a link data will cause the existing Link
        * to be removed from the Diagram} and replaced with a new Link
        * created by copying the new link template and applying any data-bindings.
        * @param {Object} linkdata a JavaScript object representing a link.
        * @param {string} cat Must not be null.*/
        setCategoryForLinkData(linkdata: Object, cat: string);
        /**
        * Change the node key that the given link data references as the
        * source of the link.
        * @param {Object} linkdata a JavaScript object representing a link.
        * @param {number|string|undefined} key This may be undefined if
        * the link should no longer come from any node.*/
        setFromKeyForLinkData(linkdata: Object, cat: string);
        /**
        * Change the information that the given link data uses to identify the
        * particular "port" that the link is coming from.
        * @param {Object} linkdata a JavaScript object representing a link.
        * @param {string} portname This may be the empty string if
        * the link should no longer be associated with any particular "port".*/
        setFromPortIdForLinkData(linkdata: Object, portname: string);
        /**
        * Change the container group for the given node data, given a key for the new group.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
        * @param {number|string|undefined} key This may be undefined if there should be no containing group data.*/
        setGroupKeyForNodeData(nodedata: Object, key: any);
        /**
        * Replaces an Array of node key values that identify node data acting as labels on the given link data.
        * This method only works if #linkLabelKeysProperty has been set to something other than an empty string.
        * @param {Object} linkdata a JavaScript object representing a link.
        * @param arr an Array of node keys; an empty Array if the property was not present.*/
        setLabelKeysForLinkData(linkdata: Object, arr: Array);
        /**
        * Change the node key that the given link data references as the
        * destination of the link.
        * @param {Object} linkdata a JavaScript object representing a link.
        * @param {number|string|undefined} key This may be undefined if
        * the link should no longer go to any node.*/
        setToKeyForLinkData(linkdata: Object, key: Array);
        /**
        * Change the information that the given link data uses to identify the
        * particular "port" that the link is going to.
        * @param {Object} linkdata a JavaScript object representing a link.
        * @param {string} portname This may be the empty string if
        * the link should no longer be associated with any particular "port".*/
        setToPortIdForLinkData(linkdata: Object, portname: string);
    }
    /*
    * Models hold the essential data of a diagram, describing the basic entities and their properties and relationships
    * without specifying the appearance and behavior of the Nodes and Links and Groups that represent them visually.
    * Models tend to hold only relatively simple data, making them easy to persist by serialization as JSON or XML formatted text.
    */
    class Model {
        /**You probably don't want to call this constructor, because this class does not support links (relationships between nodes) or groups (nodes and links and subgraphs as nodes): instead, create instances of a subclass such as GraphLinksModel or TreeModel.
        * @param {Array=} nodedataarray an optional Array containing JavaScript objects to be represented by {@link Part}s.
        */
        constructor(nodedataarray?: Array[]);
        /**Gets or sets a function that makes a copy of a node data object.*/
        copyNodeDataFunction: (obj: Object, model: Model) => Object; 
        /**Gets or sets the name of the format of the diagram data.*/
        dataFormat: string;
        /**Gets or sets whether this model may be modified, such as adding nodes.*/
        isReadOnly: boolean;
        /**Gets or sets a function that returns a unique id number or string for a node data object.*/
        makeUniqueKeyFunction: (model: Model, obj:Object)=>any;
        /**Gets or sets the name of this model.*/
        name: string;
        /**Gets or sets the name of the node data property that returns a string describing that data's category, or a function that takes a node data object and returns the category name; the default value is the name 'category'.*/
        nodeCategoryProperty: any;
        /**Gets or sets the array of node data objects that correspond to Nodes, Groups, or non-Link Parts in the Diagram.*/
        nodeDataArray: Array<Object>;
        /**Gets or sets the name of the data property that returns a unique id number or string for each node data object, or a function taking a node data object and returning the key value; the default value is the name 'key'.*/
        nodeKeyProperty: any;
        /**Gets or sets whether ChangedEvents are not recorded by the UndoManager.*/
        skipsUndoManager: boolean;
        /**Gets or sets the UndoManager for this Model.*/
        undoManager: UndoManager;
        /**
        * Add an item at the end of a data array that may be data bound by a Panel as its Panel#itemArray,
        * in a manner that can be undone/redone and that automatically updates any bindings.
        * This also calls #raiseChangedEvent to notify all listeners about the ChangedEvent#Insert.
        * If you want to add a new node or part to the diagram, call #addNodeData.
        * @param {Array} arr an Array that is the value of some Panel's Panel#itemArray.
        * @param {*} val the new value to be pushed onto the array.*/
        addArrayItem(arr: Array, val: any);
        /**
        * Register an event handler that is called when there is a ChangedEvent.
        * This registration does not raise a ChangedEvent. 
        * @param {function(ChangedEvent)} listener a function that takes a ChangedEvent as its argument.*/
        addChangedListener(listener: (a: ChangedEvent)=>any);
        /**
        * When you want to add a node or group to the diagram,
        * call this method with a new data object.
        * This will add that data to the #nodeDataArray and
        * notify all listeners that a new node data object has been inserted into the collection.
        * To remove a node from the diagram, you can remove its data object by calling #removeNodeData.
        * To add or remove an object or value from an item array, call #insertArrayItem or #removeArrayItem.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.*/
        addNodeData(nodedata: Object);
        /**Clear out all references to any model data.*/
        clear();
        /**
        * Commit the changes of the current transaction.
        * This just calls UndoManager#commitTransaction.
        * @param {string} tname a descriptive name for the transaction.*/
        commitTransaction(tname: string): boolean;
        /**
        * Decide if a given node data is in this model.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.*/
        containsNodeData(nodedata: Object): boolean;
        /**
        * Make a copy of a node data object.
        * This uses the value of #copyNodeDataFunction to actually perform the copy,
        * unless it is null, in which case this method just makes a shallow copy of the JavaScript Object.
        * This does not modify the model -- the returned data object is not added to this model.
        * This assumes that the data's constructor can be called with no arguments.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.*/
        copyNodeData(nodedata: Object): Object;
        /**
        * Given a number or string, find the node data in this model
        * that uses the given value as its unique key.
        * @param {*} key a string or a number.*/
        findNodeDataForKey(key: any): Object;
        static fromJson(s: any, model?: Model): Model;
        /**
        * Find the category of a given node data, a string naming the node template
        * or group template or part template
        * that the Diagram should use to represent the node data.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.*/
        getCategoryForNodeData(nodedata: Object): string;
        /**
        * Given a node data object return its unique key: a number or a string.
        * It is possible to change the key for a node data object by calling #setKeyForNodeData.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.*/
        getKeyForNodeData(nodedata: Object): any;
        /**
        * Add an item to a data array that may be data bound by a Panel as its Panel#itemArray,
        * given a new data value and the index at which to insert the new value, in a manner that can be undone/redone and that automatically updates any bindings.
        * This also calls #raiseChangedEvent to notify all listeners about the ChangedEvent#Insert.
        * If you want to add a new node or part to the diagram, call #addNodeData.
        * @param {Array} arr an Array that is the value of some Panel's Panel#itemArray.
        * @param {number} idx the zero-based array index where the new value will be inserted; use -1 to push the new value on the end of the array.
        * @param {*} val the new value to be inserted into the array.*/
        insertArrayItem(arr: Array, idx: number, val: any);
        /**
        * This method is called when a node data object is added to the model to make sure that
        * #getKeyForNodeData returns a unique key value.
        * The key value should be unique within the set of data managed by this model:
        * #nodeDataArray.
        * If the key is already in use, this will assign an unused number to the
        * #nodeKeyProperty property on the data.
        * If you want to customize the way in which node data gets a unique key,
        * you can set the #makeUniqueKeyFunction functional property.
        * If the node data object is already in the model and you want to change its key value,
        * call #setKeyForNodeData and give it a new unique key value.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.*/
        makeNodeDataKeyUnique(nodedata: Object);
        /**
        * Call this method to notify that the model or its objects have changed.
        * This constructs a ChangedEvent and calls all Changed listeners.
        * @param {EnumValue} change specifies the general nature of the change; typically the value is ChangedEvent#Property.
        * @param {string|function(Object):*} propertyname names the property that was modified, or a function that takes an Object and returns the property value.
        * @param {Object} obj the object that was modified, typically a GraphObject, Diagram, or a Model.
        * @param {*} oldval the previous or older value.
        * @param {*} newval the next or newer value.
        * @param {*=} oldparam an optional value that helps describe the older value.
        * @param {*=} newparam an optional value that helps describe the newer value.
        */
        raiseChangedEvent(change: EnumValue, propertyname: any, obj: Object, oldval: any, newval: any, oldparam?: any, newparam?: any);
        /**
        * Call this method to notify about a data property having changed value.
        * This constructs a ChangedEvent and calls all Changed listeners.
        * You should call this method only if the property value actually changed.
        * This method is called by #setDataProperty.
        * @param {Object} data the data object whose property changed value.
        * @param {string|function(Object):*} propertyname the name of the property, or a function that takes an Object and returns the property value.
        * @param {*} oldval the previous or old value for the property.
        * @param {*} newval the next or new value for the property.
        * @param {*=} oldparam an optional value additionally describing the old value.
        * @param {*=} newparam an optional value additionally describing the new value.
        */
        raiseDataChanged(data: Object, propertyname: any, oldval: any, newval: any, oldparam?: any, newparam?: any);
        /**
        * Remove an item from a data array that may be data bound by a Panel as its Panel#itemArray,
        * given the index at which to remove a data value, in a manner that can be undone/redone and that automatically updates any bindings.
        * This also calls #raiseChangedEvent to notify all listeners about the ChangedEvent#Remove.
        * If you want to remove a node from the diagram, call #removeNodeData.
        * Note that there is no version of this method that takes an item value instead of an index into the array.
        * Because item arrays may hold any JavaScript value, including numbers and strings, there may be duplicate entries with that value in the array.
        * To avoid ambiguity, removing an item from an array requires an index.
        * @param {Array} arr an Array that is the value of some Panel's Panel#itemArray.
        * @param {number=} idx the zero-based array index of the data item to be removed from the array;
        *   if not supplied it will remove the last item of the array.*/
        removeArrayItem(arr: Array, idx?: number);
        /**
        * Unregister an event handler listener.
        * This deregistration does not raise a ChangedEvent.
        * @param {function(ChangedEvent)} listener a function that takes a ChangedEvent as its argument.
        */
        removeChangedListener(listener: (a:ChangedEvent)=>any);
        /**
        * When you want to remove a node or group from the diagram,
        * call this method with an existing data object.
        * This will remove that data from the #nodeDataArray and
        * notify all listeners that a node data object has been removed from the collection.
        * Removing a node data from a model does not automatically remove
        * any connected link data from the model.
        * Removing a node data that represents a group does not automatically remove
        * any member node data or link data from the model.
        * To add a node to the diagram, you can add its data object by calling #addNodeData.
        * To add or remove an object or value from an item array, call #insertArrayItem or #removeArrayItem.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
        */
        removeNodeData(nodedata: Object);
        /**Rollback the current transaction, undoing any recorded changes.*/
        rollbackTransaction(): boolean;
        /**
        * Change the category of a given node data, a string naming the node template
        * or group template or part template
        * that the Diagram should use to represent the node data.
        * Changing the node template for a node data will cause the existing Node, Group, or Part
        * to be replaced with a new Node, Group, or Part
        * created by copying the new node template and applying any data-bindings.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
        * @param {string} cat Must not be null.*/
        setCategoryForNodeData(nodedata: Object, cat: string);
        /**
        * @ignore
        * Change the value of some property of a node data, a link data, or an item data, given a string naming the property
        * and the new value, in a manner that can be undone/redone and that automatically updates any bindings.
        * This override handles link data as well as node data.
        * This gets the old value of the property; if the value is the same as the new value, no side-effects occur.
        * @param {Object} data a JavaScript object representing a node, group, or non-link.
        * @param {string} propname a string that is not null or the empty string.
        * @param {*} val the new value for the property.
        */
        setDataProperty(data: Object, propname: string, val: any);
        /**
        * Change the unique key of a given node data that is already in this model.
        * The new key value must be unique -- i.e. not in use by another node data object.
        * You can call #findNodeDataForKey to check if a proposed new key is already in use.
        * This operation will check all data objects in the model and replace all references
        * using the old key value with the new one.
        * If this is called on a node data object that is not (yet) in this model,
        * this unconditionally modifies the property to the new key value.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
        * @param {number|string|undefined} key*/
        setKeyForNodeData(nodedata: Object, key: any);
        /**
        * Change the unique key of a given node data that is already in this model.
        * The new key value must be unique -- i.e. not in use by another node data object.
        * You can call #findNodeDataForKey to check if a proposed new key is already in use.
        * This operation will check all data objects in the model and replace all references
        * using the old key value with the new one.
        * If this is called on a node data object that is not (yet) in this model,
        * this unconditionally modifies the property to the new key value.
        * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
        * @param {number|string|undefined} key*/
        startTransaction(tname?: string): boolean;
        /**
        * Generate a string representation of the persistent data in this model, in JSON format.
        * Object properties whose names start with "_" are not written out.
        * Functions are not able to be written in JSON format, so any properties that have function values
        * will not be saved in the JSON string.
        * There must not be any circular references within the model data.
        * Any sharing of object references will be lost in the written JSON.
        * @param {string=} classname The optional name of the model class to use in the output;
        *     for the standard models, this is their class name prefixed with "go.".*/
        toJson(classname?: string): string;
        /**
        * Find a Part corresponding to the given data and
        * call its Panel#updateTargetBindings method, in each Diagram
        * that uses this Model.
        * @param {Object} data The data object in this model that was modified.
        * @param {string=} srcpropname If not present or the empty string,
        *   update all bindings on the target Part or item Panel;
        *   otherwise update only those bindings using this source property name.
        */
        updateTargetBindings(data: Object, srcpropname?: string);
    }
    /**
    * A Transaction holds a list of ChangedEvent}s collected during a transaction,
    * as the value of the read-only #changes} property.
    */
    class Transaction {
        /**Construct an object holding an empty list of ChangedEvents and no #name.*/
        constructor();
        /**Gets the list of ChangedEvents.*/
        changes: List;
        /**Gets or sets whether we can add more ChangedEvents to this list of changes.*/
        isComplete: boolean;
        /**Gets or sets the transaction name for this collection of changes.*/
        name: string;
        /**This predicate returns true if you can call #redo, namely when #isComplete is true.*/
        canRedo(): boolean;
        /**This predicate returns true if you can call #undo, namely when #isComplete is true.*/
        canUndo(): boolean;
        /**Clear all of the saved changes.*/
        clear();
        /**Re-perform these changes after an #undo.*/
        redo();
        /**Undo all of the changes, in reverse order.*/
        undo();
    }
    /**
    * TreeModels support tree-structured graphs of nodes and links.
    * Each node can have at most one "tree parent"; cycles are not permitted.
    * The reference to the parent node's key is a property of the child node data.
    */
    class TreeModel extends Model {
        /**This constructs an empty TreeModel unless one provides arguments as the initial data array values for the Model#nodeDataArray property.
        * @param {Array= } nodedataarray an optional Array containing JavaScript objects to be represented by Nodes.*/
        constructor(nodedataarray?: Array);
        /**Gets or sets the name of the property on node data that specifies the string or number key of the node data that acts as the "parent" for this "child" node data, or a function that takes a node data object and returns that parent key; the default value is the name 'parent'.*/
        nodeParentKeyProperty: any;
        /**Gets or sets the name of the data property that returns a string describing that node data's parent link's category, or a function that takes a node data object and returns its parent link's category string; the default value is the name 'parentLinkCategory'.*/
        parentLinkCategoryProperty: any;
        /**
        * If there is a parent node for the given node data, return the parent's key.
        * @param {Object} nodedata a JavaScript object representing a node.*/
        getParentKeyForNodeData(nodedata: Object): any;
        /**
        * Find the category for the parent link of a given child node data, a string naming the link template
        * that the Diagram should use to represent the link.
        * @param {Object} childdata a JavaScript object representing a node data.*/
        getParentLinkCategoryForNodeData(childdata: Object): string;
        /**
        * Change the parent node for the given node data, given a key for the new parent, or undefined if there should be no parent.
        * @param {Object} nodedata a JavaScript object representing a node.
        * @param {number|string|undefined} key This may be undefined if there should be no parent node data.*/
        setParentKeyForNodeData(nodedata: Object, key: any);
        /**
        * Change the category for the parent link of a given child node data, a string naming the link template
        * that the Diagram should use to represent the link.
        * 
        * Changing the link template will cause any existing Link
        * to be removed from the Diagram and replaced with a new Link
        * created by copying the new link template and applying any data-bindings.
        * @param {Object} childdata a JavaScript object representing a node data.
        * @param {string} cat Must not be null.*/
        setParentLinkCategoryForNodeData(childdata: Object, cat: string);
    }
    /**
    * A Transaction holds a list of ChangedEvent}s collected during a transaction,
    * as the value of the read-only #changes} property.
    */
    class UndoManager {
        /**The constructor produces an empty UndoManager with no transaction history.*/
        constructor();
        /**Gets the current Transaction for recording additional model change events.*/
        currentTransaction: Transaction;
        /**Gets the whole history, a list of all of the Transactions, each representing a transaction with some number of ChangedEvents.*/
        history: List;
        /**Gets the index into #history for the current undoable Transaction.*/
        hisotryIndex: number;
        /**Gets or sets whether this UndoManager records any changes.*/
        isEnabled: boolean;
        /**This property is true after the first call to #startTransaction and before a corresponding call to #commitTransaction or #rollbackTransaction.*/
        isInTransaction: boolean;
        /**This property is true during a call to #undo or #redo.*/
        isUndoingRedoing: boolean;
        /**Gets or sets the maximum number of transactions that this undo manager will remember.*/
        maxHistoryLength: number;
        /**Gets an iterator for all of the Models that this UndoManager is handling.*/
        models: Iterator;
        /**Gets a stack of ongoing transaction names.*/
        nestedTransactionNames: List;
        /**Gets the current transaction level.*/
        transactionLevel: number;
        /**Gets the Transaction in the #history to be redone next.*/
        transactionToRedo: Transaction;
        /**Gets the Transaction in the #history to be undone next.*/
        transactionToUndo: Transaction;
        addModel(model: Model);
        /**This predicate returns true if you can call #redo.*/
        canRedo(): boolean;
        /**This predicate returns true if you can call #undo.*/
        canUndo(): boolean;
        /**Clear all of the Transactions and clear all other state, including any ongoing transaction without rolling back.*/
        clear();
        /**
        * Commit the current transaction started by a call to #startTransaction.
        * For convenience, this method is called by Model#commitTransaction and Diagram#commitTransaction.
        * If this call stops a top-level transaction,
        * we mark the #currentTransaction as complete (Transaction#isComplete),
        * we add the Transaction to the #history list,
        * and we return true.
        * Committing a transaction when there have been some undos without corresponding
        * redos will throw away the Transactions holding changes that happened
        * after the current state, before adding the new Transaction to the
        * #history list.
        * @param {string} tname a short string describing the transaction.*/
        commitTransaction(tname: string): boolean;
        /**
        * Maybe record a ChangedEvent in the #currentTransaction.
        * This calls #skipsEvent to see if this should ignore the change.
        * If #skipsEvent returns false, this creates a copy of the ChangedEvent
        * and adds it to the #currentTransaction.
        * If there is no #currentTransaction, this first creates and remembers it.
        * This method always ignores all changes while performing
        * an #undo or #redo.
        * This method is also a no-op if #isEnabled is false.
        * @param {ChangedEvent} e a ChangedEvent.
        */
        handleChanged(e: ChangedEvent);
        /**Re-perform this object change after an #undo.*/
        redo();
        /**
        * Inform this UndoManager that it will no longer be receiving ChangedEvents
        * when the given Model is changed.
        * The model will no longer receive notifications about transactions and undo or redo operations.
        * You should not call this method during a transaction.
        * If you call this method between transactions when there is a transaction history,
        * you should be careful that there are no ChangedEvents referring to that model in any Transactions.
        * @param {Model} model A Model that this UndoManager should no longer manage.*/
        removeModel(model: Model);
        /**Rollback the current transaction started by a call to #startTransaction, undoing any changes.*/
        rollbackTransaction(): boolean;
        /**
        * This predicate is called by #handleChanged to decide if a ChangedEvent
        * is not interesting enough to be remembered.
        * Transactional events (of change type ChangedEvent#Transaction) are always skipped.
        * Changed events for GraphObjects that are in Layer#isTemporary layers are also skipped.
        * Sometimes changed events do not even get to #handleChanged because
        * Model#skipsUndoManager or Diagram#skipsUndoManager is true.
        * @param {ChangedEvent} e the ChangedEvent received by #handleChanged.*/
        skipsEvent(e: ChangedEvent): boolean;
        /**
        * Begin a transaction, where the changes are held by a Transaction object
        * as the value of #currentTransaction.
        * You must call either #commitTransaction or #rollbackTransaction afterwards.
        * For convenience, this method is called by Model#startTransaction and Diagram#startTransaction.
        * Transactions can be nested.
        * Starting or ending a nested transaction will return false.
        * Nested transactions will share the same Transaction list of ChangedEvents.
        * Starting a transaction will not necessarily cause #currentTransaction to be non-null.
        * A Transaction object is usually only created by #handleChanged when a ChangedEvent first occurs.
        * @param {string=} tname a short string describing the transaction.*/
        startTransaction(tname?: string): boolean;
        /**Reverse the effects of this object change.*/
        undo();
    }
    /**
     * This layout positions nodes in a circular arrangement.
     * This layout makes use of a LayoutNetwork of
     * CircularVertexes and CircularEdges that normally
     * correspond to the Node}s and Links of the Diagram.
     */
    class CircularLayout extends Layout {
        /**Constructs a CircularLayout with no Layout#network and with no owning Layout#diagram.*/
        constructor();
        /**Returns the coordinates of the center of the laid-out ellipse.*/
        actualCenter: Point;
        /**Gets the effective spacing that may have been calculated by the layout.*/
        actualSpacing: number;
        /**Gets the effective X radius that may have been calculated by the layout.*/
        actualXRadius: number;
        /**Gets the effective Y radius that may have been calculated by the layout.*/
        actualYRadius: number;
        /**Gets or sets how the nodes are spaced.*/
        arrangement: EnumValue;
        /**Gets or sets the ratio of the arrangement's height to its width (1 for a circle, >1 for a vertically elongated ellipse).*/
        aspectRatio: number;
        /**Gets or sets the comparer which sorts the data when #sorting is set to CircularLayout#Ascending or CircularLayout#Descending.*/
        comparer: any;
        /**Gets or sets whether the nodes are arranged clockwise or counterclockwise.*/
        direction: EnumValue;
        /**Specifies how the diameter of nodes will be calculated.*/
        nodeDiameterFormula: EnumValue;
        /**Gets or sets the horizontal radius of the elliptical arrangement.*/
        radius: number;
        /**Gets or sets if and how the nodes are sorted.*/
        sorting: EnumValue;
        /**Gets or sets the distance between nodes (if #radius is NaN) or the minimum distance between nodes (if #radius is a number).*/
        spacing: number;
        /**Gets or sets the angle (in degrees, clockwise from the positive side of the X axis) of the first element.*/
        startAngle: number;
        /**Gets or sets the absolute angle (in degrees) between the first and last node.*/
        sweepAngle: number;
        /**Position each Node according to the Vertex position, and then position the Links.*/
        commitLayout();
        /**Commit the position and routing of all edge links.*/
        commitLinks();
        /**Commit the position of all vertex nodes.*/
        commitNodes();
        /**Create a new LayoutNetwork of CircularVertexes and CircularEdges.*/
        createNetwork(): LayoutNetwork;
        /**Assign the positions of the vertexes in the network.
        * @param {Diagram|Group|Iterable} coll A Diagram or a Group or a collection of Parts.
        */
        doLayout(coll: Diagram);
        doLayout(coll: Group);
        doLayout(coll: Iterable);
        /**Nodes are sorted using the #comparer, in ascending order; This value is used for CircularLayout#sorting.*/
        static Ascending: EnumValue;
        /**The ring is filled by alternating sides; the second node is counterclockwise from the first node; This value is used for CircularLayout#direction.*/
        static BidirectionalLeft: EnumValue;
        /**The ring is filled by alternating sides; the second node is clockwise from the first node; This value is used for CircularLayout#direction.*/
        static BidirectionalRight: EnumValue;
        /**The effective diameter is either the width or height of the node, whichever is larger; This will cause circular nodes to touch when CircularLayout#spacing is 0; This is ideal when the nodes are circular.*/
        static Circular: EnumValue;
        /**Rings are filled clockwise; This value is used for CircularLayout#direction.*/
        static Clockwise: EnumValue;
        /**The angular distance between the nodes is constant; This value is used for CircularLayout#arrangement.*/
        static ConstantAngle: EnumValue;
        /**The distance between the centers of the nodes is constant; This value is used for CircularLayout#arrangement.*/
        static ConstantDistance: EnumValue;
        /**The spacing between the idealized boundaries of the nodes is constant; This value is used for CircularLayout#arrangement.*/
        static ConstantSpacing: EnumValue;
        /**Rings are filled counterclockwise; This value is used for CircularLayout#direction.*/
        static Counterclockwise: EnumValue;
        /**Nodes are sorted using the #comparer, in reverse ascending (descending) order; This value is used for CircularLayout#sorting.*/
        static Descending: EnumValue;
        /**Nodes are arranged in the order given; This value is used for CircularLayout#sorting.*/
        static Forwards: EnumValue;
        /**Nodes are ordered to reduce link crossings; This value is used for CircularLayout#sorting.*/
        static Optimized: EnumValue;
        /**The vertices are arranged as close together as possible considering the CircularLayout#spacing, assuming the nodes are rectangular; This value is used for CircularLayout#arrangement.*/
        static Packed: EnumValue;
        /**The effective diameter is sqrt(width^2+height^2); The corners of square nodes will touch at 45 degrees when CircularLayout#spacing is 0; This value is used for CircularLayout#nodeDiameterFormula.*/
        static Pythagorean: EnumValue;
        /**Nodes are arranged in the reverse of the order given; This value is used for CircularLayout#sorting.*/
        static Reverse: EnumValue;
    }
    /**
    * Force-directed layout treats the graph as if it were a system of physical
    * bodies with forces acting on them and between them.
    * The algorithm seeks a configuration of the bodies with locally minimal energy,
    * i.e. vertex positions such that the sum of the forces on each vertex is zero.
    */
    class ForceDirectedLayout extends Layout {
        /**Constructs a ForceDirectedLayout with no Layout#network and with no owning Layout#diagram.*/
        constructor();
        /**Gets or sets the space between which the layout will position the connected graphs that together compose the network.*/
        arrangementSpacing: Size;
        /**Gets or sets whether #commitNodes should move all of the nodes so that the nodes all fit with the top-left corner at the Layout#arrangementOrigin.*/
        arrangesToOrigin: boolean;
        /**Gets or sets whether this layout should find all Nodes whose category is "Comment" and whose anchors are nodes represented in the network, and add ForceDirectedVertexes representing those balloon comments as nodes in the network.*/
        comments: boolean;
        /**Gets the current iteration count, valid during a call to #doLayout.*/
        currentIteration: number;
        /**Gets or sets the default value computed by #electricalCharge.*/
        defaultCommentElectricalCharge: number;
        /**Gets or sets the default value computed by #springLength.*/
        defaultCommentSpringLength: number;
        /**Gets or sets the default value computed by #electricalCharge.*/
        defaultElectricalCharge: number;
        /**Gets or sets the default value computed by #gravitationalMass.*/
        defaultGravitationalMass: number;
        /**Gets or sets the default value computed by #springLength.*/
        defaultSpringLength: number;
        /**Gets or sets the default value computed by #springStiffness.*/
        defaultSpringStiffness: number;
        /**Gets or sets approximately how far a node must move in order for the iterations to continue.*/
        epsilonDistance: number;
        /**Gets or sets a threshold for the distance beyond which the electrical charge forces may be ignored.*/
        infinityDistance: number;
        /**Gets or sets the maximum number of iterations to perform when doing the force-directed auto layout.*/
        maxIterations: number;
        /**Gets or sets whether the fromSpot and the toSpot of every Link should be set to Spot#Default.*/
        setsPortSpots: boolean;
        /**Position the Nodes according to the Vertex positions.*/
        commitLayout();
        /**Commit the position and routing of all edge links.*/
        commitLinks();
        /**Commit the position of all vertex nodes.*/
        commiteNodes();
        /**Create a new LayoutNetwork of ForceDirectedVertexes and ForceDirectedEdges.*/
        createNetwork(): LayoutNetwork;
        /**
        * Assign the positions of the vertexes in the network.
        * @param {Diagram|Group|Iterable} coll A Diagram or a Group or a collection of Parts.
        */
        doLayout(coll: Diagram);
        doLayout(coll: Group);
        doLayout(coll: Iterable);
        /**
        * Returns the charge of the vertex,
        * the value of ForceDirectedVertex#charge if it's a number,
        * or else the value of #defaultElectricalCharge.
        * @param {ForceDirectedVertex} v*/
        electricalCharge(v: ForceDirectedVertex): number;
        /**
        * Returns the electrical field in the X direction acting on a vertex at the given point.
        * 
        * Used to define an external electrical field at a point
        * independent of the vertex charges.
        * A vertex L is acted upon by a force in the X direction of magnitude
        * @param {number} x
        * @param {number} y*/
        electricalFieldX(x: number, y: number): number;
        /**
        * Returns the electrical field in the Y direction acting on a vertex at the given point.
        * 
        * Used to define an external electrical field at a point
        * independent of the vertex charges.
        * A vertex L is acted upon by a force in the Y direction of magnitude
        * @param {number} x
        * @param {number} y*/
        electricalFieldY(x: number, y: number): number;
        /**
        * This returns the gravitational field in the X direction acting on a vertex at the given point.
        * 
        * Used to define an external gravitational field at a point
        * independent of the vertex masses.
        * A vertex L is acted upon by a force in the X direction of magnitude
        * @param {number} x
        * @param {number} y*/
        gravitationalFieldX(x: number, y: number): number;
        /**
        * This returns the gravitational field in the Y direction acting on a vertex at the given point.
        * 
        * Used to define an external gravitational field at a point
        * independent of the vertex masses.
        * A vertex L is acted upon by a force in the Y direction of magnitude
        * @param {number} x
        * @param {number} y*/
        gravitationalFieldY(x: number, y: number): number;
        /**
        * Returns the mass of the vertex,
        * the value of ForceDirectedVertex#mass if it's a number,
        * or else the value of #defaultGravitationalMass.
        * @param {ForceDirectedVertex} v*/
        gravitationalMass(v: ForceDirectedVertex): number;
        /**
        * This predicate returns true if the vertex should not be moved
        * by the layout algorithm but still have an effect on nearby and connected vertexes.
        * The default implementation returns ForceDirectedVertex#isFixed.
        * @param {ForceDirectedVertex} v*/
        isFixed(v: ForceDirectedVertex): boolean;
        /**
        * Returns the length of the spring representing an edge.
        * The two vertexes connected by the edge E are acted upon by a force of magnitude
        * @param {ForceDirectedEdge} e*/
        springLength(e: ForceDirectedEdge): number;
        /**
        * Returns the stiffness of the spring representing an edge.
        * The two vertexes connected by the edge E are acted upon by a force of magnitude
        * @param {ForceDirectedEdge} e*/
        springStiffness(e: ForceDirectedEdge): number;
    }
    /** A vertex represents a node in a LayoutNetwork.
    * It holds layout - specific data for the node.*/
    class LayoutVertex {
        /** This constructs a vertex that does not know about any Node.*/
        constructor();
        /**Gets or sets the Bounds of this vertex, in document coordinates.*/
        bounds: Rect;
        /**Gets or sets the center Point.x of this vertex, in document coordinates.*/
        centerX: number;
        /**Gets or sets the center Point.y of this vertex, in document coordinates.*/
        centerY: number;
        /**Gets an iterator for all of the edges that go out of this vertex.*/
        destinationEdges: Iterator;
        /**Gets an iterator for all of the vertexes that are connected with edges going out of this vertex.*/
        destinationVertexes: Iterator;
        /**Gets an iterator for all of the edges that are connected with this vertex in either direction.*/
        edges: Iterator;
        /**Gets the total number of edges that are connected with this vertex in either direction.*/
        edgesCount: number;
        /**Gets or sets the offset of the #centerX and #centerY from the #bounds position.*/
        focus: Point;
        /**Gets or sets the relative X position of the "center" point, the focus.*/
        focusX: number;
        /**Gets or sets the relative Y position of the "center" point, the focus.*/
        focusY: number;
        /**Gets or sets the height of this vertex.*/
        height: number;
        /**Gets or sets the LayoutNetwork that owns this vertex.*/
        network: LayoutNetwork;
        /**Gets or sets the Node associated with this vertex, if any.*/
        node: Node;
        /**Gets an iterator for all of the edges that come into this vertex.*/
        sourceEdges: Iterator;
        /**Gets an iterator for all of the vertexes that are connected with edges coming into this vertex.*/
        sourceVertexes: Iterator;
        /**Gets an iterator for all of the vertexes that are connected in either direction with this vertex.*/
        vertexes: Iterator;
        /**Gets or sets the width of this vertex.*/
        width: number;
        /**Gets or sets the left point of this vertex.*/
        x: number;
        /**Gets or sets the top point of this vertex.*/
        y: number;
        /**Adds a LayoutEdge to the list of successors (the edge will be going out from this vertex).
        * @param {LayoutEdge} edge
        */
        addDestinationEdge(edge: LayoutEdge);
        /**Adds a LayoutEdge to the list of predecessors (the edge will be coming into this vertex).
        * @param {LayoutEdge} edge
        */
        addSourceEdge(edge: LayoutEdge);
        /**Moves the Node corresponding to this vertex so that its position is at the current #bounds point.*/
        commit();
        /**Deletes a LayoutEdge from the list of successors (the edge was going out from this vertex).
            * @param {LayoutEdge} edge
        */
        deleteDestinationEdge(edge: LayoutEdge);
        /**Deletes a LayoutEdge from the list of predecessors (the edge was coming into this vertex).
        * @param {LayoutEdge} edge
        */
        deleteSourceEdge(edge: LayoutEdge);
        /**This static method is used to compare the Part#text values of the #nodes of the argument LayoutVertexes.
        * @param {LayoutVertex} m
        * @param {LayoutVertex} n*/
        static smartComparer(m: LayoutVertex, n: LayoutVertex): number;
        /**This static method is used to compare the Part#text values of the #nodes of the argument LayoutVertexes.
        * @param {LayoutVertex} m
        * @param {LayoutVertex} n*/
        static standardComparer(m: LayoutVertex, n: LayoutVertex): number;
    }
    /** Force - directed layout treats the graph as if it were a system of physical
    * bodies with forces acting on them and between them.
    * The algorithm seeks a configuration of the bodies with locally minimal energy,
    * i.e.vertex positions such that the sum of the forces on each vertex is zero.
    */
    class ForceDirectedVertex extends LayoutVertex {
        constructor();
        /**Gets or sets the electrical charge for this vertex.*/
        charge: number;
        /**Gets or sets the cumulative force on the vertex in the X direction.*/
        forceX: number;
        /**Gets or sets the cumulative force on the vertex in the Y direction.*/
        forceY: number;
        /**Gets or sets whether the vertex may be moved by any forces.*/
        isFixed: boolean;
        /**Gets or sets the gravitational mass for this vertex.*/
        mass: number;
    }
    class LayoutEdge {
        /**This constructs an edge that does not know about any Link.*/
        constructor();
        /**Gets or sets the LayoutVertex that this edge comes from.*/
        fromVertex: LayoutVertex;
        /**Gets or sets the Link associated with this edge, if any.*/
        link: Link;
        /**Gets or sets the LayoutNetwork that owns this edge.*/
        network: LayoutNetwork;
        /**Gets or sets the LayoutVertex that this edge goes to.*/
        toVertex: LayoutVertex;
        /**Commits the route of this edge to the corresponding Link, if any.*/
        commit();
        /**Returns the edge's vertex at the other of this edge from the given vertex.
        * @param {LayoutVertex} v
        */
        getOtherVertex(v: LayoutVertex);
    }
     /** This holds {@link ForceDirectedLayout} -specific information about {@link Link} s.*/
    class ForceDirectedEdge extends LayoutEdge {
        constructor();
        /**Gets or sets the length of this edge.*/
        length: number;
        /**Gets or sets this edge's stiffness or resistence to compression or stretching.*/
        stiffness: number;
    }
    /**
    * This simple layout places all of the Parts in a grid-like arrangement, ordered, spaced apart,
    * and wrapping as needed.  It ignores any Links connecting the Nodes being laid out.
    */
    class GridLayout extends Layout {
        /** This simple layout places all of the Parts in a grid-like arrangement, ordered, spaced apart,
        * and wrapping as needed.  It ignores any Links connecting the Nodes being laid out.
        */
        constructor();
        /**Gets or sets whether the Part#location or the position should be used to arrange each part.*/
        alignment: EnumValue;
        /**Gets or sets how to arrange the parts.*/
        arrangement: EnumValue;
        /**Gets or sets the minimum part size by which each part is positioned in the grid.*/
        cellSize: Size;
        /**Gets or sets the comparison function used to sort the parts.*/
        comparer: (a:Part, b:Part)=>number;
        /**Gets or sets what order to place the parts.*/
        sorting: EnumValue;
        /**Gets or sets the minimum horizontal and vertical space between parts.*/
        spacing: Size;
        /**Gets or sets the maximum number of columns.*/
        wrappingColumn: number;
        /**Gets or sets the wrapping width.*/
        wrappingWidth: number;
        /**
        * Assign the positions of the parts, ignoring any links.
        * @param {Diagram|Group|Iterable} coll A Diagram or a Group or a collection of Parts.
        */
        doLayout(coll: Diagram);
        doLayout(coll: Group);
        doLayout(coll: Iterable);
        /**Lay out each child according to the sort order given by GridLayout#comparer; This value is used for GridLayout#sorting.*/
        static Ascending: EnumValue;
        /**Lay out each child in reverse sort order given by GridLayout#comparer; This value is used for GridLayout#sorting.*/
        static Descending: EnumValue;
        /**Lay out each child in the order in which they were found; This value is used for GridLayout#sorting.*/
        static Forward: EnumValue;
        /**Fill each row from left to right; This value is used for GridLayout#arrangement.*/
        static LeftToRight: EnumValue;
        /**Position the part's Part#location at a grid point; This value is used for GridLayout#alignment.*/
        static Location: EnumValue;
        /**Position the top-left corner of each part at a grid point; This value is used for GridLayout#alignment.*/
        static Position: EnumValue;
        /**Lay out each child in reverse order from which they were found; This value is used for GridLayout#sorting.*/
        static Reverse: EnumValue;
        /**Fill each row from right to left; This value is used for GridLayout#arrangement.*/
        static RightToLeft: EnumValue;
    }
    /**
    * This arranges nodes into layers.
    * The method uses a hierarchical approach
    * for creating drawings of digraphs with nodes arranged in layers.
    * The layout algorithm consists of four-major steps: Cycle Removal,
    * Layer Assignment, Crossing Reduction, and Straightening and Packing.
    */
    class LayeredDigraphLayout extends Layout {
        /**Constructs a LayeredDigraphLayout with no Layout#network and with no owning Layout#diagram.*/
        constructor();
        /**Gets or sets which aggressive option is being used to look for link crossings.*/
        aggressiveOption: EnumValue;
        /**Gets or sets the size of each column.*/
        columnSpacing: number;
        /**Gets or set which cycle removal option is used.*/
        cycleRemoveOption: EnumValue;
        /**Gets or sets the direction the graph grows towards.*/
        direction: number;
        /**Gets or sets which indices initialization option is being used.*/
        initializeOption: EnumValue;
        /**Gets or sets the number of iterations to be done.*/
        iterations: number;
        /**Gets or sets which layering option is being used.*/
        layeringOption: EnumValue;
        /**Gets or sets the size of each layer.*/
        layerSpacing: number;
        /**Gets the largest column value.*/
        maxColumn: number;
        /**Gets the largest index value.*/
        maxIndex: number;
        /**Gets the larges index layer.*/
        maxIndexLayer: number;
        /**Gets the largest layer value.*/
        maxLayer: number;
        /**Gets the smallest index layer.*/
        minIndexLayer: number;
        /**Gets or sets the options used by the straighten and pack function, The default value is LayeredDigraphLayout#PackAll.*/
        packOption: number;
        /**Gets or sets whether the FromSpot and ToSpot of each link should be set to values appropriate for the given value of LayeredDigraphLayout#direction.*/
        setsPortSpots: boolean;
        /**Assigns every vertex in the input network to a layer.*/
        assignLayers();
        /**Updates the physical location of "real" nodes and links to reflect the layout.*/
        commitLayout();
        /**Routes the links.*/
        commitLinks();
        /**Lays out the nodes.*/
        commitNodes();
        /**Create a new LayoutNetwork of LayeredDigraphVertexes and LayeredDigraphEdges.*/
        createNetwork(): LayoutNetwork;
        /**Assign the positions of the vertexes in the network.
        * @param {Diagram|Group|Iterable} coll A Diagram or a Group or a collection of Parts.
        */
        doLayout(coll: Diagram);
        doLayout(coll: Group);
        doLayout(coll: Iterable);
        /**The faster, less aggressive, crossing reduction algorithm; a valid value for LayeredDigraphLayout#aggressiveOption.*/
        static AggressiveLess: EnumValue;
        /**The slower, more aggressive, crossing reduction algorithm, a valid value for LayeredDigraphLayout#aggressiveOption.*/
        static AggressiveMore: EnumValue;
        /**The fastest, but poorest, crossing reduction algorithm; a valid value for LayeredDigraphLayout#aggressiveOption.*/
        static AggressiveNone: EnumValue;
        /**Remove cycles using depth first cycle removal; a valid value of LayeredDigraphLayout#cycleRemoveOption.*/
        static CycleDepthFirst: EnumValue;
        /**Remove cycles using greedy cycle removal; a valid value of LayeredDigraphLayout#cycleRemoveOption.*/
        static CycleGreedy: EnumValue;
        /**Initialize using depth first in initialization; a valid value for LayeredDigraphLayout#initializeOption.*/
        static InitDepthFirstIn: EnumValue;
        /**Initialize using depth first out initialization; a valid value for LayeredDigraphLayout#initializeOption.*/
        static InitDepthFirstOut: EnumValue;
        /**Initialize using naive initialization; a valid value for LayeredDigraphLayout#initializeOption.*/
        static InitNaive: EnumValue;
        /**Assign layers using longest path sink layering; a valid value for LayeredDigraphLayout#layeringOption.*/
        static LayerLongestPathSink: EnumValue;
        /**Assign layers using longest path source layering; a valid value for LayeredDigraphLayout#layeringOption.*/
        static LayerLongestPathSource: EnumValue;
        /**Assign layers using optimal link length layering; A valid value for LayeredDigraphLayout#layeringOption.*/
        static LayerOptimalLinkLength: EnumValue;
        /**Enable all options for the LayeredDigraphLayout#packOption property; See also LayeredDigraphLayout#PackExpand, LayeredDigraphLayout#PackStraighten, and LayeredDigraphLayout#PackMedian.*/
        static PackAll: number;
        /**This option gives more chances for the packing algorithm to improve the network, but is very expensive in time for large networks; a valid value for LayeredDigraphLayout#packOption.*/
        static PackExpand: number;
        /**This option tries to have the packing algorithm center groups of nodes based on their relationships with nodes in other layers, a valid value for LayeredDigraphLayout#packOption.*/
        static PackMedian: number;
        /**Does minimal work in packing the nodes; a valid value for LayeredDigraphLayout#packOption.*/
        static PackNone: number;
        /**This option tries to have the packing algorithm straighten many of the links that cross layers, a valid value for LayeredDigraphLayout#packOption.*/
        static PackStraighten: number;
    }
    /**
    * This is the base class for all of the predefined diagram layout implementations.
    * They only arrange Part}s (primarily Node}s and Link}s) in a Diagram},
    * not to GraphObject}s in Panel}s (i.e. panel layout).
    */
    class Layout {
        /**Create a minimal layout that only positions Nodes that do not have a location.*/
        constructor();
        /**Gets or sets the top-left point for where the graph should be positioned when laid out.*/
        arrangementOrigin: Point;
        /**Gets the Diagram that owns this layout, if it is the value of Diagram#layout.*/
        diagram: Diagram;
        /**Gets the Group that uses this layout, if it is the value of a group's Group#layout.*/
        group: Group;
        /**Gets or sets whether this layout is performed on an initial layout.*/
        isInitial: boolean;
        /**Gets or sets whether this layout can be invalidated by #invalidateLayout.*/
        isOngoing: boolean;
        /**Gets or sets whether this layout be performed in real-time, before the end of a transaction.*/
        isRealtime: boolean;
        /**Gets or sets whether this layout routes Links.*/
        isRouting: boolean;
        /**Gets or sets whether this layout needs to be performed again.*/
        isValidLayout: boolean;
        /**Gets or sets whether this layout depends on the Diagram#viewportBounds's size.*/
        isViewportSized: boolean;
        /**Gets or sets the LayoutNetwork used by this Layout, if any.*/
        newtork: LayoutNetwork;
        /**When using a LayoutNetwork, commit changes to the diagram by setting Node positions and by routing the Links.*/
        commitLayout();
        /**Creates a copy of this Layout and returns it.*/
        copy();
        /**Create a new LayoutNetwork of LayoutVertexes and LayoutEdges.*/
        createNetwork(): LayoutNetwork;
        /**Position all of the nodes that do not have an assigned Part#location in the manner of a simple rectangular array.
        * @param {Diagram|Group|Iterable} coll A Diagram or a Group or a collection of Parts.
        */
        doLayout(coll: Diagram);
        doLayout(coll: Group);
        doLayout(coll: Iterable);
        /**If #isOngoing is true and if an initial layout has not yet been performed, set the #isValidLayout property to false, and ask to perform another layout in the near future.*/
        invalidateLayout();
        /**Create and initialize a LayoutNetwork with the given nodes and links.
        * @param {Diagram|Group|Iterable} coll A Diagram or a Group or a collection of Parts.
        */
        makeNetwork(coll: any);
        /**When using a LayoutNetwork, update the "physical" node positionings and link routings.*/
        updateParts();
    }
    /**
    * This provides an abstract view of a diagram as a
     * network (graph) of vertexes and directed edges.
     * The network contains vertexes and edges corresponding to Node}s and Link}s.
     */
    class LayoutNetwork {
        /**This constructs an empty network.*/
        constructor();
        /**Gets a collection of all of the LayoutEdges in this network.*/
        edges: Iterable;
        /**Gets the Layout that uses this network of LayoutVertexes and LayoutEdges.*/
        layout: Layout;
        /**Gets a collection of all of the LayoutVertexes in this network.*/
        vertexes: Iterable;
        /**Adds a LayoutEdge to the network.
        * @param {LayoutEdge} edge*/
        addEdge(edge: LayoutEdge);
        /**This convenience method makes sure there is a LayoutEdge in this network corresponding to a Link.
        * @param {Link} link
        * @param {Link} link
        */
        addLink(link: Link): LayoutEdge;
        /**This convenience method makes sure there is a LayoutVertex in this network corresponding to a Node.*/
        addNode(node: Node): LayoutVertex;
        /**Creates a network of LayoutVertexes and LayoutEdges corresponding to the given Nodes and Links.@param {Node} node
        * @param {Iterable} parts A collection of Nodes or Links.
        * @param {boolean=} toplevelonly whether to skip Parts in the given collection that are contained by Groups.
        */
        addParts(parts: Iterable, toplevelonly?: boolean);
        /**Adds a LayoutVertex to the network.* @param {LayoutVertex} vertex*/
        addVertex(vertex: LayoutVertex);
        /**Allocate a new instance of LayoutEdge.*/
        createEdge(): LayoutEdge;
        /**Allocate a new instance of LayoutVertex.*/
        createVertex(): LayoutVertex;
        /**Deletes all vertexes and edges that have no Part associated with them.*/
        deleteArtificialVertexes();
        /**Removes a LayoutEdge from the network.@param {LayoutEdge} edge*/
        deleteEdge(edge: LayoutEdge);
        /**This convenience method deletes from this network any LayoutEdge corresponding to a Link.@param {Link} link*/
        deleteLink(link: Link);
        /**This convenience method deletes any LayoutVertex corresponding to a Node.@param {Node} node*/
        deleteNode(node: Node);
        /**Deletes all LayoutEdges whose "to vertex" and "from vertex" are the same vertex.*/
        deleteSelfEdges();
        /**Removes a LayoutVertex from the network.@param {LayoutVertex} vertex*/
        deleteVertex(vertex: LayoutVertex);
        /**Retrieve all of the Nodes and Links from the LayoutVertexes and LayoutEdges that are in this network.*/
        findAllParts(): Iterable;
        /**Returns the LayoutEdge that was constructed for the Link.@param {Link} linkl*/
        findEdge(link: Link): LayoutEdge;
        /**Returns the LayoutVertex that was constructed for the Node.@param {Node} node*/
        findVertex(node: Node): LayoutVertex;
        /**Links two vertexes already in the network and returns the created LayoutEdge.
        * @param {LayoutVertex} fromVertex
        * @param {LayoutVertex} toVertex
        * @param {Link} link*/
        linkVertexes(fromVertex: LayoutVertex, toVertex: LayoutVertex, link: Link): LayoutEdge;
        /**Reverses the direction of a LayoutEdge in the network.
        * @param {LayoutEdge} edge
        */
        reverseEdge(edge: LayoutEdge);
        /**Modify this network by splitting it up into separate subnetworks, each of which has all of its vertexes connected to each other, but not to any vertexes in any other subnetworks.*/
        splitIntoSubNetworks(): Iterable;
    }
    /**
    * This layout positions nodes in a tree-like arrangement.
    */
    class TreeLayout extends Layout {
        /**Constructs a TreeLayout with no Layout#network and with no owning Layout#diagram.*/
        constructor();
        /**Gets or sets the default alignment of parents relative to their children.*/
        alignment: EnumValue;
        /**Gets or sets the default alignment of parents relative to their children.*/
        alternateAlignment: EnumValue;
        /**Gets or sets the default direction for tree growth.*/
        alternateAngle: number;
        /**Gets or sets a limit on how broad a tree should be.*/
        alternateBreadthLimit: number;
        /**Gets or sets the spot that children nodes' ports get as their ToSpot The default value is Spot#Default.*/
        alternateChildPortSpot: Spot;
        /**Gets or sets the distance between a node and its comments.*/
        alternateCommentMargin: number;
        /**Gets or sets the distance between comments.*/
        alternateCommentSpacing: number;
        /**Gets or sets how closely to pack the child nodes of a subtree.*/
        alternateCompaction: EnumValue;
        /**Gets or sets the default comparison function used for sorting.*/
        alternateComparer: (a:TreeVertex, b:TreeVertex)=>number;
        /**Gets or sets the object holding the default values for alternate layer TreeVertexes, used when the #treeStyle is #StyleAlternating or #StyleLastParents.*/
        alternateDefaults: TreeVertex;
        /**Gets or sets the distance between a parent node and its children.*/
        alternateLayerSpacing: number;
        /**Gets or sets the fraction of the node's depth for which the children's layer starts overlapped with the parent's layer.*/
        alternateLayerSpacingParentOverlap: number;
        /**Gets or sets the default indentation of the first child.*/
        alternateNodeIndent: number;
        /**Gets or sets the fraction of this node's breadth is added to #nodeIndent to determine any spacing at the start of the children.*/
        alternateNodeIndentPastParent: number;
        /**Gets or sets the distance between child nodes.*/
        alternateNodeSpacing: number;
        /**Gets or sets the spot that this node's port gets as its FromSpot.*/
        alternatePortSpot: Spot;
        /**Gets or sets the default indentation of the first child of each row, if the #alignment is not a "Center" alignment.*/
        alternateRowIndent: number;
        /**Gets or sets the distance between rows of children.*/
        alternateRowSpacing: number;
        /**Gets or sets whether the TreeLayout should set the ToSpot for each child node port.*/
        alternateSetsChildPortSpot: boolean;
        /**Gets or sets whether the TreeLayout should set the FromSpot for this parent node port.*/
        alternateSetsPortSpot: boolean;
        /**Gets or sets the default Sorting policy.*/
        alternateSorting: EnumValue;
        /**Gets or sets the default direction for tree growth.*/
        angle: number;
        /**Gets or sets how #arrangeTrees should lay out the separate trees.*/
        arrangement: EnumValue;
        /**Gets or sets the space between which #arrangeTrees will position the trees.*/
        arrangementSpacing: Size;
        /**Gets or sets a limit on how broad a tree should be.*/
        breadthLimit: number;
        /**Gets or sets the spot that children nodes' ports get as their ToSpot.*/
        childPortSpot: Spot;
        /**Gets or sets the distance between a node and its comments.*/
        commentMargin: number;
        /**Gets or sets the distance between comments.*/
        commentSpacing: number;
        /**Gets or sets how closely to pack the child nodes of a subtree.*/
        compaction: EnumValue;
        /**Gets or sets the default comparison function used for sorting.*/
        comparer: (a:TreeVertex, b:TreeVertex)=>number;
        /**Gets or sets the distance between a parent node and its children.*/
        layerSpacing: number;
        /**Gets or sets the fraction of the node's depth for which the children's layer starts overlapped with the parent's layer.*/
        layerSpacingParentOverlap: number;
        /**Gets or sets the default indentation of the first child.*/
        nodeIndent: number;
        /**Gets or sets the fraction of this node's breadth is added to #nodeIndent to determine any spacing at the start of the children.*/
        nodeIndentPastParent: number;
        /**Gets or sets the distance between child nodes.*/
        nodeSpacing: number;
        /**Gets or sets how the tree should be constructed from the TreeEdges connecting TreeVertexes.*/
        path: EnumValue;
        /**Gets or sets the spot that this node's port gets as its FromSpot.*/
        portSpot: Spot;
        /**Gets or sets the object holding the default values for root TreeVertexes.*/
        rootDefaults: TreeVertex;
        /**Gets or sets the collection of root vertexes.*/
        roots: Set;
        /**Gets or sets the default indentation of the first child of each row, if the #alignment is not a "Center" alignment.*/
        rowIndent: number;
        /**Gets or sets the distance between rows of children.*/
        rowSpacing: number;
        /**Gets or sets whether the TreeLayout should set the ToSpot for each child node port.*/
        setsChildPortSpot: boolean;
        /**Gets or sets whether the TreeLayout should set the FromSpot for this parent node port.*/
        setsPortSpot: boolean;
        /**Gets or sets the default Sorting policy.*/
        sorting: EnumValue;
        /**Gets or sets the Style for the resulting trees.*/
        treeStyle: EnumValue;
        /**Find associated objects to be positioned along with the TreeVertex.*/
        addComments(v: LayoutVertex);
        /**Position each separate tree.*/
        arrangeTrees();
        /**Assign final property values for a TreeVertex.@param {LayoutVertex} v*/
        assignTreeVertexValues(v: LayoutVertex);
        /**Set the fromSpot and toSpot for each Vertex, position each Node according to the Vertex position, and then position the Links.*/
        commitLayout();
        /**Commit the position and routing of all edge links.*/
        commitLinks();
        /**Commit the position of all vertex nodes.*/
        commitNodes();
        /**Create a new LayoutNetwork of TreeVertexes and TreeEdges.*/
        createNetwork(): LayoutNetwork;
        /**Assign the positions of the vertexes in the network.
        * @param {Diagram|Group|Iterable} coll A Diagram or a Group or a collection of Parts.
        */
        doLayout(coll: Diagram);
        doLayout(coll: Group);
        doLayout(coll: Iterable);
        /**Assign initial property values for a TreeVertex.
        * @param {LayoutVertex} v
        */
        initializeTreeVertexValues(v: LayoutVertex);
        /**Position and TreeVertex#comments around the vertex.
        * @param {LayoutVertex} v
        */
        layoutComments(v: LayoutVertex);
        /**Create and initialize a TreeNetwork with the given nodes and links.
        * @param {Diagram|Group|Iterable} coll A Diagram or a Group or a collection of Parts.
        */
        makeNetwork(coll: any): LayoutNetwork;
        /**The children are positioned in a bus, only on the bottom or right side of the parent; This value is used for TreeLayout#alignment or TreeLayout#alternateAlignment.*/
        static AlignmentBottomRightBus: EnumValue;
        /**The children are positioned in a bus on both sides of an "aisle" where the links to them go, with the last odd child (if any) placed at the end of the aisle in the middle.*/
        static AlignmentBus: EnumValue;
        /**Like TreeLayout#AlignmentBus with the children arranged on both sides of an "aisle" with any last odd child placed at the end of the aisle, but the children get an TreeVertex#angle that depends on which side of the aisle they were placed.*/
        static AlignmentBusBranching: EnumValue;
        /**The parent is centered at the middle of the range of its immediate child nodes; This value is used for TreeLayout#alignment or TreeLayout#alternateAlignment.*/
        static AlignmentCenterChildren: EnumValue;
        /**The parent is centered at the middle of the range of its child subtrees; This value is used for TreeLayout#alignment or TreeLayout#alternateAlignment.*/
        static AlignmentCenterSubtrees: EnumValue;
        /**The parent is positioned near the last of its children; This value is used for TreeLayout#alignment or TreeLayout#alternateAlignment.*/
        static AlignmentEnd: EnumValue;
        /**The parent is positioned near the first of its children; This value is used for TreeLayout#alignment or TreeLayout#alternateAlignment.*/
        static AlignmentStart: EnumValue;
        /**The chlidren are positioned in a bus, only on the top or left side of the parent; This value is used for TreeLayout#alignment or TreeLayout#alternateAlignment.*/
        static AlignmentTopLeftBus: EnumValue;
        /**Do not move each root node, but position all of their descendants relative to their root; This value is used for TreeLayout#arrangement.*/
        static ArrangementFixedRoots: EnumValue;
        /**Position each tree in a non-overlapping fashion by increasing X coordinates, starting at the Layout#arrangementOrigin; This value is used for TreeLayout#arrangement.*/
        static ArrangementHorizontal: EnumValue;
        /**Position each tree in a non-overlapping fashion by increasing Y coordinates, starting at the Layout#arrangementOrigin; This value is used for TreeLayout#arrangement.*/
        static ArrangementVertical: EnumValue;
        /**A simple fitting of subtrees; This value is used for TreeLayout#compaction or TreeLayout#alternateCompaction.*/
        static CompactionBlock: EnumValue;
        /**Only simple placement of children next to each other, as determined by their subtree breadth; This value is used for TreeLayout#compaction or TreeLayout#alternateCompaction.*/
        static CompactionNone: EnumValue;
        /**This value for TreeLayout#path causes the value of Diagram#isTreePathToChildren to effectively choose either TreeLayout#PathDestination (if true) or TreeLayout#PathSource (if false).*/
        static PathDefault: EnumValue;
        /**The children of a TreeVertex are its LayoutVertex#destinationVertexes, the collection of connected LayoutEdge#toVertexes; This value is used for TreeLayout#path.*/
        static PathDestination: EnumValue;
        /**The children of a TreeVertex are its LayoutVertex#sourceVertexes, the collection of connected LayoutEdge#fromVertexes; This value is used for TreeLayout#path.*/
        static PathSource: EnumValue;
        /**Lay out each child according to the sort order given by TreeVertex#comparer; This value is used for TreeLayout#sorting or TreeLayout#alternateSorting.*/
        static SortingAscending: EnumValue;
        /**Lay out each child in reverse sort order given by TreeVertex#comparer; This value is used for TreeLayout#sorting or TreeLayout#alternateSorting.*/
        static SortingDescending: EnumValue;
        /**Lay out each child in the order in which they were found; This value is used for TreeLayout#sorting or TreeLayout#alternateSorting.*/
        static SortingForwards: EnumValue;
        /**Lay out each child in reverse order from which they were found; This value is used for TreeLayout#sorting or TreeLayout#alternateSorting.*/
        static SortingReverse: EnumValue;
        /**Alternate layers of the tree have different properties, typically including the angle; This value is used for TreeLayout#treeStyle.*/
        static StyleAlternating: EnumValue;
        /**Just like the standard layered tree style, except that the nodes with children but no grandchildren have alternate properties; This value is used for TreeLayout#treeStyle.*/
        static StyleLastParents: EnumValue;
        /**The normal tree style, where all of the children of each TreeVertex are lined up horizontally or vertically; This value is used for TreeLayout#treeStyle.*/
        static StyleLayered: EnumValue;
        /**All of the nodes get the alternate properties, except the root node gets the default properties; This value is used for TreeLayout#treeStyle.*/
        static StyleRootOnly: EnumValue;
    }
    /**
    * This holds TreeLayout-specific information about Nodes.
    */
    class TreeVertex extends LayoutVertex {
        constructor();
        /**Gets or sets how this parent node should be aligned relative to its children.*/
        alignment: EnumValue;
        /**Gets or sets the actual absolute angle at which this node should grow.*/
        angle: number;
        /**Gets or sets how broad a node and its descendants should be.*/
        breadthLimit: number;
        /**Gets or sets the spot that children nodes' ports get as their ToSpot, if #setsChildPortSpot is true and the node has only a single port.*/
        childPortSpot: Spot;
        /**Gets or sets the logical children for this node.*/
        children: Array;
        /**Gets the number of immediate children this node has.*/
        childrenCount: number;
        /**Gets or sets the space to leave between the node and the comments.*/
        commentMargin: number;
        /**Gets or sets an array of Nodes that will be positioned near this node.*/
        comments: Array;
        /**Gets or sets the space to leave between consecutive comments.*/
        commentSpacing: number;
        /**Gets or sets how the children of this node should be packed together.*/
        compaction: EnumValue;
        /**Gets or sets how the children should be sorted.*/
        comparer: any;
        /**Gets or sets the number of descendants this node has.*/
        descendantCount: number;
        /**Gets or sets whether this node has been initialized as part of TreeLayout#doLayout when building the tree structures.*/
        initialized: boolean;
        /**Gets or sets the distance between this node and its children.*/
        layerSpacing: number;
        /**Gets or sets the fraction of this node's depth that may overlap with the children's layer.*/
        layerSpacingParentOverlap: number;
        /**Gets or sets the number of single-parent ancestors this node has.*/
        level: number;
        /**Gets or sets the maximum number of children of any descendant of this node.*/
        maxChildrenCount: number;
        /**Gets or sets the maximum depth of the subtrees below this node.*/
        maxGenerationCount: number;
        /**Gets or sets the distance the first child should be indented.*/
        nodeIndent: number;
        /**Gets or sets whether the first child should be indented past the parent node's breadth.*/
        nodeIndentPastParent: number;
        /**Gets or sets the distance between child nodes.*/
        nodeSpacing: number;
        /**Gets or sets the logical parent for this node.*/
        parent: TreeVertex;
        /**Gets or sets the spot that this node's port gets as its FromSpot, if #setsPortSpot is true and the node has only a single port.*/
        portSpot: Spot;
        /**Gets or sets the position of this node relative to its parent node.*/
        relativePosition: Point;
        /**Gets or sets the distance the first child of each row should be indented.*/
        rowIndent: number;
        /**Gets or sets the distance between rows within one layer, all sharing the same parent.*/
        rowSpacing: number;
        /**Gets or sets whether the TreeLayout should set the ToSpot for each child node port.*/
        setsChildPortSpot: boolean;
        /**Gets or sets whether the TreeLayout should set the FromSpot for this parent node port.*/
        setsPortSpot: boolean;
        /**Gets or sets whether and in what order the children should be sorted.*/
        sorting: EnumValue;
        /**Gets or sets the offset of this parent node relative to its whole subtree.*/
        subtreeOffset: Point;
        /**Gets or sets the size of the subtree (including all descendants) parented by this node.*/
        subtreeSize: Size;
        /**
        * Copy inherited properties from another TreeVertex to this one.
        * @param {TreeVertex} copy
        */
        copyInheritedPropertiesFrom(copy: TreeVertex);
    }
    /**
    * The ActionTool is responsible for handling and dispatching mouse events on GraphObjects
    * that have GraphObject#isActionable set to true.
    * This is how one implements "controls", such as buttons or sliders or knobs, as GraphObjects
    * that can be inside Parts without interfering with the standard tool behaviors.
    */
    class ActionTool extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#actionTool.*/
        constructor();
        /**This tool can run when there is a mouse-down on an object with GraphObject#isActionable true or if the object is within a Panel that "isActionable".*/
        canStart(): boolean;
        /**Call the GraphObject#actionCancel event if defined on the current object.*/
        doCancel();
        /**If there is a GraphObject found with GraphObject#isActionable set to true, call that object's GraphObject#actionDown event, if it exists.*/
        doMouseDown();
        /**If this tool is active call GraphObject#actionMove, if it exists, on the active object.*/
        doMouseMove();
        /**Calls the GraphObject#actionUp event if defined, then effectively calls Tool#standardMouseClick to perform the normal click behaviors, and then stops this tool.*/
        doMouseUp();
    }
    /**
    * The ClickCreatingTool lets the user create a node by clicking where they want the new node to be.
    * By default a double-click is required to start this tool;
    * set #isDoubleClick to false if you want a single-click to create a node.
    */
    class ClickCreatingTool extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#clickCreatingTool, which you can modify.*/
        constructor();
        /**Gets or sets a data object that will be copied and added to the diagram's model each time this tool executes.*/
        archetypeNodeData: Object;
        /**Gets or sets whether a double click rather than a single-click is required to insert a new Part at the mouse-up point.*/
        isDoubleClick: boolean;
        /**This tool can run when the diagram is not read-only and supports creating new nodes, and when there has been a click (or double-click if #isDoubleClick is true) in the background of the diagram (not on a Part), and #archetypeNodeData is an object that can be copied and added to the model.*/
        canStart(): boolean;
        /**Upon a click, call #insertPart and stop this tool.*/
        doMouseUp();
        /**Create a node by adding a copy of the #archetypeNodeData object to the diagram's model, assign its Part#location to be the given point, and select the new part.
        * @param {Point} loc a Point in document coordinates.
        */
        insertPart(loc: Point): Part;
    }
    /**
    * The ClickSelectingTool selects and deselects Parts when there is a click.
    * It does this by calling Tool#standardMouseSelect.
    * It is also responsible for handling and dispatching click events on GraphObjects
    * by calling Tool#standardMouseClick.
    */
    class ClickSelectingTool extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#clickSelectingTool.*/
        constructor();
        /**This tool can run when there was a click.*/
        canStart(): boolean;
        /**Upon a click, this calls Tool#standardMouseSelect to change the Diagram#selection collection, then calls Tool#standardMouseClick to perform the normal click behaviors, and then stops this tool.*/
        doMouseUp(); 
    }
    /**
    * The ContextMenuTool is used to create and show a context menu.
    * It automatically disables any browser context menu.
    */
    class ContextMenuTool extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#contextMenuTool, which you can modify.*/
        constructor();
        /**Gets the currently showing context menu, or null if there is none.*/
        currentContextMenu: Adornment;
        /**Gets the original mouse-down point in document coordinates.*/
        mouseDownPoint: Point;
        /**Return true if it's a mouse right click that hasn't moved Tool#isBeyondDragSize and that is on a GraphObject with a GraphObject#contextMenu.*/
        canStart(): boolean;
        /**Do nothing, activation is special and relies on doMouseUp*/
        doActivate();
        /**Handle mouse-enter, mouse-over, and mouse-leave events.*/
        doMouseMove();
        /**If there is something found by #findObjectWithContextMenu, call #showContextMenu with that object's GraphObject#contextMenu or Diagram#contextMenu.*/
        doMouseUp();
        /**Find a GraphObject at the current mouse point with a GraphObject#contextMenu, or return the Diagram if there is a Diagram#contextMenu.*/
        findObjectWithContextMenu(): any;
        /**Hide any context menu.*/
        hideContextMenu();
        /**Hide the default context menu.*/
        hideDefaultContextMenu();
        /**This is called by #showContextMenu to position the context menu within the viewport.*/
        positionContextMenu(contextmenu: Adornment, obj: GraphObject);
        /**Show an Adornment as a context menu.*/
        showContextMenu(contextmenu: Adornment, obj: GraphObject);
        /**Show a series of HTML elements acting as a context menu.*/
        showDefaultContextMenu();
    }
    /**
    * The DraggingTool is used to move or copy selected parts with the mouse.
    * Dragging the selection moves parts for which Part#canMove is true.
    * If the user holds down the Control key, this tool will make a copy of the parts being dragged,
    * for those parts for which Part#canCopy is true.
    */
    class DraggingTool extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#draggingTool, which you can modify.*/
        constructor();
        /**Gets the collection of Parts that this tool has copied.*/
        copiedParts: Map;
        /**Gets or sets whether for a copying operation the extended selection is copied or only the selected parts.*/
        copiesEffectiveCollection: boolean;
        /**Gets the Part found at the mouse point.*/
        currentPart: Part;
        /**On touch gestures only, this property gets or sets the time in milliseconds for which the mouse must be stationary before this tool can be started.*/
        delay: number;
        /**Gets the collection of Parts being dragged.*/
        draggedParts: Map;
        /**Gets or sets whether moving or copying a node also includes all of the node's tree children and their descendants, along with the links to those additional nodes.*/
        dragsTree: boolean;
        /**Gets or sets the size of the grid cell used when snapping during a drag if the value of #isGridSnapEnabled is true.*/
        gridSnapCellSize: Size;
        /**Gets or sets the Spot that specifies what point in the grid cell dragged parts snap to, if the value of #isGridSnapEnabled is true.*/
        gridSnapCellSpot: Spot;
        /**Gets or sets the snapping grid's origin point, in document coordinates, if the value of #isGridSnapEnabled is true.*/
        gridSnapOrigin: Point;
        /**Gets or sets whether the DraggingTool snaps objects to grid points.*/
        isGridSnapEnabled: boolean;
        /**Gets or sets whether the DraggingTool snaps objects to grid points during the drag.*/
        isGridSnapRealtime: boolean;
        /**This tool can run if the diagram allows selection and moves/copies/dragging-out, if the mouse has moved far enough away to be a drag and not a click, and if #findDraggablePart has found a selectable part at the mouse-down point.*/
        canStart(): boolean;
        /**Find the actual collection of nodes and links to be moved or copied, given an initial collection.
        * @param {Iterable} parts A Set or List of Parts.
        */
        computeEffectiveCollection(parts: Iterable): Map;
        /**This method computes the new location for a Node or simple Part, given a new desired location and an optional Map of dragged parts, taking any grid-snapping into consideration, any Part#dragComputation function, and any Part#minLocation and Part#maxLocation.* @param {Node} n
        * @param {Point} newloc
        * @param {Map=} draggedparts  an optional Map mapping Parts to JavaScript Objects that have a "point" property remembering the original location of that Part.
        * @param {Point=} result  an optional Point that is modified and returned*/
        computeMove(n: Node, newloc: Point, draggedparts?: Map, result?: Point): Point;
        /**Start the dragging operation.*/
        doActivate();
        /**Abort any dragging operation.*/
        doCancel();
        /**Stop the dragging operation by stopping the transaction and cleaning up any temporary state.*/
        doDeactivate();
        /**Perform any additional side-effects during a drag, whether an internal move or copy or an external drag, that may affect the existing non-moved object(s).
        * @param {Point} pt a Point in document coordinates.
        * @param {GraphObject} obj the GraphObject at the point,
        * excluding what is being dragged or temporary objects;
        * the argument may be null if the drag is occurring in the background of the diagram.
        * Use GraphObject#part to get the Node or Part at the root of
        * the visual tree of the stationary object.*/
        doDragOver(pt: Point, obj: GraphObject);
        /**Perform any additional side-effects after a drop, whether an internal move or copy or an external drop, that may affect the existing non-moved object(s).
        * @param {Point} pt a Point in document coordinates.
        * @param {GraphObject} obj the GraphObject where the drop occurred,
        * excluding what was dropped or temporary objects;
        * the argument may be null if the drop occurred in the background of the diagram.
        * Use GraphObject#part to get the Node or Part at the root of
        * the visual tree of the stationary object.*/
        doDropOnto(pt: Point, obj: GraphObject);
        /**Handle switching between copying and moving modes as the Control key is pressed or released.*/
        doKeyDown();
        /**Handle switching between copying and moving modes as the Control key is pressed or released.*/
        doKeyUp();
        /**Move the #draggedParts (or if copying, the #copiedParts) to follow the current mouse point.*/
        doMouseMove();
        /**On a mouse-up finish moving or copying the effective selection.*/
        doMouseUp();
        /**Return the selectable and movable/copyable Part at the mouse-down point.*/
        findDraggablePart(): Part;
        /**Stop the dragging operation by stopping the transaction and cleaning up any temporary state.*/
        localDeactivate();
        /**This predicate is true when the diagram allows objects to be copied and inserted, and some object in the selection is copyable, and the user is holding down the Control key.*/
        mayCopy(): boolean;
        /**This predicate is true when the diagram allows objects to be moved, and some object in the selection is movable.*/
        mayMove(): boolean;
        /**Move a collection of Parts by a given offset.
        * @param {Map} parts  a Map mapping Parts to JavaScript Objects that have a "point" property remembering the original location of that Part.
        * @param {Point} offset
        * @param {boolean} check  Whether to check Part#canMove on each part.*/
        moveParts(parts: Map, offset: Point, check: boolean);
        /**This override prevents the Control modifier unselecting an already selected part.*/
        standardMouseSelect();
    }
    /**
    * The DragSelectingTool lets the user select multiple parts with a rectangular area.
    * There is a temporary part, the #box,
    * that shows the current area encompassed between the mouse-down
    * point and the current mouse point.
    * The default drag selection box is a magenta rectangle.
    * You can change the #box to customize its appearance -- see its documentation for an example.
    */
    class DragSelectingTool extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#dragSelectingTool, which you can modify.*/
        constructor();
        /**Gets or sets the Part used as the "rubber-band selection box" that is stretched to follow the mouse, as feedback for what area will be passed to #selectInRect upon a mouse-up.*/
        box: Part;
        /**Gets or sets the time in milliseconds for which the mouse must be stationary before this tool can be started.*/
        delay: number;
        /**Gets or sets whether a selectable Part may be only partly or must be completely enclosed by the rectangle given to #selectInRect.*/
        isPartialInclusion: boolean;
        /**This tool can run when the diagram allows selection, there has been delay of at least #delay milliseconds after the mouse-down before a mouse-move, there has been a mouse-drag far enough away not to be a click, and there is no selectable part at the mouse-down point.*/
        canStart(): boolean;
        /**This just returns a Rect stretching from the mouse-down point to the current mouse point.*/
        computeBoxBounds(): Rect;
        /**Capture the mouse and show the #box.*/
        doActivate();
        /**Release the mouse and remove any #box.*/
        doDeactivate();
        /**Update the #box's position and size according to the value of #computeBoxBounds.*/
        doMouseMove();
        /**Call #selectInRect with the value of a call to #computeBoxBounds.*/
        doMouseUp();
        /**This method is called to select some parts within the area of a given rectangle.
        *@param {Rect} r*/
        selectInRect(r: Rect);
    }
    /**
    * This abstract class is the base class for the LinkingTool and RelinkingTool classes.
    * This class includes properties for defining and accessing any temporary nodes and temporary link
    * that are used during any linking operation, as well as access to the existing diagram's nodes and link
    * (if any) that are involved with the linking operation.
    */
    class LinkingTool extends LinkingBaseTool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#linkingTool, which you can modify.*/
        constructor();
        /**Gets or sets an optional node data object representing a link label, that is copied by #insertLink and added to the GraphLinksModel when creating a new Link.*/
        archetypeLabelNodeData: Object;
        /**Gets or sets a data object that is copied by #insertLink and added to the GraphLinksModel when creating a new Link.*/
        archetypeLinkData: Object;
        /**Gets or sets the direction in which new links may be drawn.*/
        direction: EnumValue;
        /**Gets or sets the GraphObject at which #findLinkablePort should start its search.*/
        startObject: GraphObject;
        /**This tool can run when the diagram allows linking, the model is modifiable, the left-button mouse drag has moved far enough away to not be a click, and when #findLinkablePort has returned a valid port.*/
        canStart(): boolean;
        /**Start the linking operation.*/
        doActivate();
        /**Finishing the linking operation stops the transaction, releases the mouse, and resets the cursor.*/
        doDeactivate();
        /**A mouse-up ends the linking operation; if there is a valid #targetPort nearby, this adds a new Link by calling #insertLink.*/
        doMouseUp();
        /**Return the GraphObject at the mouse-down point, if it is part of a node and if it is valid to link with it.*/
        findLinkablePort(): GraphObject;
        /**Make a copy of the #archetypeLinkData, set its node and port properties, and add it to the model.
        * @param {Node} fromnode
        * @param {GraphObject} fromport
        * @param {Node} tonode
        * @param {GraphObject} toport*/
        insertLink(fromnode: Node, fromport: GraphObject, tonode: Node, toport: GraphObject): Link;
        /**This value for LinkingTool#direction indicates that users may draw new links backwards only (i.e.*/
        static BackwardsOnly: EnumValue;
        /**This value for LinkingTool#direction indicates that users may draw new links in either direction.*/
        static Either: EnumValue;
        /**This value for LinkingTool#direction indicates that users may draw new links forwards only (i.e.*/
        static ForwardsOnly: EnumValue;
    }
    /**
    * This abstract class is the base class for the LinkingTool and RelinkingTool classes.
    */
    class LinkingBaseTool extends Tool {
        /**Don't construct this directly -- this is an abstract class.*/
        constructor();
        /**Gets whether the linking operation is in the forwards direction, connecting from the "From" port to the "To" port.*/
        isForwards: boolean;
        /**Gets or sets a predicate that determines whether or not a new link between two ports would be valid.*/
        linkValidation: any;
        /**Gets or sets the original Node from which the new link is being drawn or from which the #originalLink was connected when being relinked.*/
        originalFromNode: Node;
        /**Gets or sets the GraphObject that is the port in the #originalFromNode.*/
        originalFromPort: GraphObject;
        /**Gets or sets the original Link being reconnected by the RelinkingTool.*/
        originalLink: Link;
        /**Gets or sets the original Node to which the new link is being drawn or to which the #originalLink was connected when being relinked.*/
        originalToNode: Node;
        /**Gets or sets the GraphObject that is the port in the #originalToNode.*/
        originalToPort: GraphObject;
        /**Gets or sets the distance at which link snapping occurs.*/
        portGravity: number;
        /**Gets or sets a function that is called as the tool targets the nearest valid port.*/
        portTargeted: (a:Node, b:GraphObject, c:Node, d:GraphObject, e:boolean)=>any;
        /**Gets or sets a proposed GraphObject port for connecting a link.*/
        targetPort: GraphObject;
        /**Gets or sets the temporary Node at the "from" end of the #temporaryLink while the user is drawing or reconnecting a link.*/
        temporaryFromNode: Node;
        /**Gets or sets the GraphObject that is the port at the "from" end of the #temporaryLink while the user is drawing or reconnecting a link.*/
        temporaryFromPort: GraphObject;
        /**Gets or sets the temporary Link that is shown while the user is drawing or reconnecting a link.*/
        temporaryLink: Link;
        /**Gets or sets the temporary Node at the "to" end of the #temporaryLink while the user is drawing or reconnecting a link.*/
        temporaryToNode: Node;
        /**Gets or sets the GraphObject that is the port at the "to" end of the #temporaryLink while the user is drawing or reconnecting a link.*/
        temporaryToPort: GraphObject;
        /**Make a temporary port look and act like a real one.
        * @param {Node} realnode
        * @param {GraphObject} realport
        * @param {Node} tempnode
        * @param {GraphObject} tempport
        * @param {boolean} toend*/
        copyPortProperties(realnode: Node, realport: GraphObject, tempnode: Node, tempport: GraphObject, toend: boolean);
        /**Mouse movement results in a temporary node moving to where a valid target port is located, or to where the mouse is if there is no valid target port nearby.*/
        doMouseMove();
        /**Find a port with which the user could complete a valid link.
        * @param {boolean} toend true if looking for a "to" port.*/
        findTargetPort(toend: boolean): GraphObject;
        /**This predicate is true if both argument ports are in the same Node.
        * @param {GraphObject} fromport
        * @param {GraphObject} toport*/
        isInSameNode(fromport: GraphObject, toport: GraphObject): boolean;
        /**This predicate is true if there is a link in the diagram going from the given port to the given port
        * @param {GraphObject} fromport
        * @param {GraphObject} toport.*/
        isLinked(fromport: GraphObject, toport: GraphObject): boolean;
        /**This predicate is true if it is permissible to connect a link from a given node/port.
        * @param {Node} fromnode
        * @param {GraphObject} fromport
        * False if the node is in a Layer that does not Layer#allowLink.
        * False if the port's GraphObject#fromLinkable is either false or null.
        * False if the number of links connected to the port would exceed the port's GraphObject#fromMaxLinks.
        * Otherwise true.*/
        isValidFrom(fromnode: Node, fromport: GraphObject): boolean;
        /**This predicate should be true when it is logically valid to connect a new link from one node/port to another node/port.
        * @param {Node} fromnode the "from" Node.
        * @param {GraphObject} fromport the "from" GraphObject port.
        * @param {Node} tonode the "to" Node.
        * @param {GraphObject} toport the "to" GraphObject port.
        * False if #isValidFrom is false for the "from" node/port.
        * False if #isValidTo is false for the "to" node/port.
        * False if #isInSameNode is true unless GraphObject#fromLinkableSelfNode
        * and GraphObject#toLinkableSelfNode are true for the two ports.
        * False if #isLinked is true unless GraphObject#fromLinkableDuplicates
        * and GraphObject#toLinkableDuplicates are true for the two ports.
        * False if trying to link to the link's own label node(s).
        * If #linkValidation is a predicate and if it returns false, this predicate returns false.
        * Otherwise this predicate is true.*/
        isValidLink(fromnode: Node, fromport: GraphObject, tonode: Node, toport: GraphObject): boolean;
        /**This predicate is true if it is permissible to connect a link to a given node/port.
        * @param {Node} tonode
        * @param {GraphObject} toport
        * False if the node is in a Layer that does not Layer#allowLink.
        * False if the port's GraphObject#toLinkable is either false or null.
        * False if the number of links connected from the port would exceed the port's GraphObject#toMaxLinks.
        * Otherwise true.*/
        isValidTo(tonode: Node, toport: GraphObject): boolean;
        /**Reset a temporary port's properties to neutral values when there is no target port.
        * @param {Node} tempnode
        * @param {GraphObject} tempport
        * @param {boolean} toend*/
        setNoTargetPortProperties(tempnode: Node, tempport: GraphObject, toend: boolean);
    }
    /**
    * The LinkReshapingTool is used to interactively change the route of a Link.
    * This tool makes use of an Adornment, shown when the adorned Link is selected,
    * that includes some number of reshape handles.
    * This tool conducts a transaction while the tool is active.
    * A successful reshaping will result in a "LinkReshaped" DiagramEvent and a "LinkReshaping" transaction.
    */
    class LinkReshapingTool extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#linkReshapingTool, which you can modify.*/
        constructor();
        /**Gets the Link that is being routed manually.*/
        adornedLink: Link;
        /**Gets the GraphObject that is the tool handle being dragged by the user.*/
        handle: GraphObject;
        /**Gets or sets a small GraphObject that is copied as a reshape handle at each movable point in the selected link's route.*/
        handleArchetype: GraphObject;
        /**Gets or sets a small GraphObject that is copied as a resegment handle at each mid point in the selected Link's route.*/
        midHandleArchetype: GraphObject;
        /**Gets the Point that was the original location of the handle that is being dragged to reshape the Link.*/
        originalPoint: Point;
        /**Gets the List of Points that was the original route of the Link that is being reshaped.*/
        originalPoints: List;
        /**This tool may run when there is a mouse-down event on a reshape handle.*/
        canStart(): boolean;
        /**This is called by #doMouseMove and #doMouseUp to limit the input point before calling #reshape. @param {Point} p*/
        computeReshape(p: Point): Point;
        /**Start reshaping, if #findToolHandleAt finds a reshape handle at the mouse down point.*/
        doActivate();
        /**Restore the link route to be the original points and stop this tool.*/
        doCancel();
        /**This stops the current reshaping operation with the link route shaped the way it is.*/
        doDeactivate();
        /**Call #reshape with a new point determined by the mouse to change the route of the #adornedLink.*/
        doMouseMove();
        /**Reshape the route with a point based on the most recent mouse point by calling #reshape, and then raise a "LinkReshaped" DiagramEvent before stopping this tool.*/
        doMouseUp();
        /**Change the route of the #adornedLink by moving the point corresponding to the current #handle to be at the given Point. @param {Point} newPoint*/
        reshape(newPoint: Point);
        /**Show an Adornment with reshape handles at each of the interesting points of the link's route, if the link is selected and visible and if Part#canReshape is true. @param {Part} part*/
        updateAdornments(part: Part);
    }
    /**
    * The PanningTool supports manual panning, where the user can shift the
    * Diagram#position by dragging the mouse.
    */
    class PanningTool extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#panningTool.*/
        constructor();
        /**Gets or sets whether panning actions will allow allow events to bubble instead of panning in the diagram.*/
        bubbles: boolean;
        /**Gets the Point that was the original value of Diagram#position when the panning operation started.*/
        originalPosition: Point;
        /**This tool can run when the diagram allows scrolling and the mouse has been dragged with the left button far enough away from the mouse-down point to avoid being a click.*/
        canStart(): boolean;
        /**Capture the mouse, change the diagram cursor, and remember the Diagram#position.*/
        doActivate();
        /**Restore the Diagram#position to what it was when this tool activated.*/
        doCancel();
        /**Release the mouse and restore the default diagram cursor.*/
        doDeactivate();
        /**Modify the Diagram#position according to how much the mouse has moved.*/
        doMouseMove();
        /**Modify the Diagram#position according to how much the mouse has moved.*/
        doMouseUp();
    }
    /**
    * The RelinkingTool allows the user to reconnect an existing Link
    * if the Link#relinkableTo and/or Link#relinkableFrom properties are true.
    */
    class RelinkingTool extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#relinkingTool, which you can modify.*/
        constructor();
        /**Gets or sets a small GraphObject that is copied as a relinking handle for the selected link path at the "from" end of the link.*/
        fromHandleArchetype: GraphObject;
        /**Gets the GraphObject that is the tool handle being dragged by the user.*/
        handle: GraphObject;
        /**Gets or sets a small GraphObject that is copied as a relinking handle for the selected link path at the "to" end of the link.*/
        toHandleArchetype: GraphObject;
        /**This tool can run when the diagram allows relinking, the model is modifiable, and there is a relink handle at the mouse-down point.*/
        canStart(): boolean;
        /**Start the relinking operation.*/
        doActivate();
        /**Finishing the linking operation stops the transaction, releases the mouse, and resets the cursor.*/
        doDeactivate();
        /**A mouse-up ends the relinking operation; if there is a valid #targetPort nearby, this modifies the old link to connect with the target port.*/
        doMouseUp();
        /**Modify an existing Link to connect to a new node and port.
        * @param {Link} existinglink
        * @param {Node} newnode the Node to connect to or from.
        * @param {GraphObject} newport the GraphObject port to connect to or from.
        * @param {boolean} toend If true, this modifies the link's "to" node and port; otherwise it modifies the "from" node and port.
        */
        reconnectLink(existinglink: Link, newnode: Node, newport: GraphObject, toend: boolean): boolean;
        /**Show an Adornment for each end of the Link that the user may reconnect. @param {Part} part*/
        updateAdornments(part: Part);
    }
    /**
    * The ResizingTool is used to interactively change the size of a GraphObject
    * in the selected Part or Node.
    * This tool does not operate on Links.
    */
    class ResizingTool extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#resizingTool, which you can modify.*/
        constructor();
        /**Gets the GraphObject that is being resized.*/
        adornedObject: GraphObject;
        /**Gets or sets the width and height multiples with which the user must resize.*/
        cellSize: Size;
        /**Gets the GraphObject that is the tool handle being dragged by the user.*/
        handle: GraphObject;
        /**Gets or sets a small GraphObject that is copied as a resizing handle for the selected part.*/
        handleArchetype: GraphObject;
        /**Gets or sets whether the ResizingTool snaps object sizes to the diagram's background grid during the resize.*/
        isGridSnapEnabled: boolean;
        /**Gets or sets the maximum size to which the user can resize.*/
        maxSize: Size;
        /**Gets or sets the minimum size to which the user can resize.*/
        minSize: Size;
        /**Gets the Size that was the original value of the GraphObject#desiredSize of the element that is being resized.*/
        originalDesiredSize: Size;
        /**Gets the Point that was the original value of the Part#location of the Part that is being resized.*/
        originalLocation: Point;
        /**This tool may run when there is a mouse-down event on a resize handle, the diagram is not read-only and it allows resizing, the left mouse button is being used, and this tool's adornment's resize handle is at the current mouse point.*/
        canStart(): boolean;
        /**The size should be a multiple of the value returned by this method.*/computeCellSize(): Size;
        /**The effective maximum resizing size is the minimum of the #maxSize and the #adornedObject's GraphObject#maxSize.*/
        computeMaxSize(): Size;
        /**The effective minimum resizing size is the maximum of #minSize and the #adornedObject's GraphObject#minSize.*/
        computeMinSize(): Size;
        /**Given a Spot in the original bounds of the object being resized and a new Point, compute the new Rect.
        * @param {Point} newPoint a Point in local coordinates.
        * @param {Spot} spot the alignment spot of the handle being dragged.
        * @param {Size} min the result of the call to #computeMinSize.
        * @param {Size} max the result of the call to #computeMaxSize.
        * @param {Size} cell the result of the call to #computeCellSize.
        * @param {boolean} reshape true if the new size may change the aspect ratio from that of the natural bounds of the #adornedObject.
        */
        computeResize(newPoint: Point, spot: Spot, min: Size, max: Size, cell: Size, reshape: boolean): Rect;
        /**Capture the mouse, remember the object's original bounds, and start a transaction.*/
        doActivate();
        /**Restore the original GraphObject's size.*/
        doCancel();
        /**Stop the current transaction and release the mouse.*/
        doDeactivate();
        /**Call #resize with a new size determined by the current mouse point.*/
        doMouseMove();
        /**Call #resize with the final bounds based on the most recent mouse point, commit the transaction, and raise the "PartResized" DiagramEvent.*/
        doMouseUp();
        /**Change the size of the selected part's Part#resizeObject to have the given bounds. @param {Rect} newr*/
        rezise(newr: Rect);
        /**Show an Adornment with the resize handles at points along the edge of the bounds of the selected Part's Part#resizeObject. @param {Part} part*/
        updateAdornments(part: Part);
    }
    /**
    * The RotatingTool is used to interactively change the GraphObject#angle of a GraphObject.
    * This tool allows the user to rotate the Part#rotateObject of the selected Part.
    * Normally this works with Parts or Nodes; it does not make sense for Links.
    * The Part must be Part#rotatable, which is false by default.
    */
    class RotatingTool extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#rotatingTool, which you can modify.*/
        constructor();
        /**Gets the GraphObject that is being rotated.*/
        adornedObject: GraphObject;
        /**Gets or sets a small GraphObject that is copied as a rotation handle for the selected part.*/
        handle: GraphObject;
        /**Gets or sets a small GraphObject that is copied as a rotation handle for the selected part.*/
        handleArchetype: GraphObject;
        /**Gets the angle that was the original value of the GraphObject#angle of the GraphObject that is being rotated.*/
        originalAngle: number;
        /**Gets or sets the the closeness to a desired angle at which the angle is "snapped to".*/
        snapAngleEpsilon: number;
        /**Gets or sets the preferred angles for the selected object.*/
        snapAngleMultiple: number;
        /**This tool may run when there is a mouse-down event on a rotate handle, the diagram is not read-only and it allows rotation, the left mouse button is being used, and this tool's adornment's rotate handle is at the current mouse point.*/
        canStart(): boolean;
        /**Compute the new angle given a point. @param{Point} newPoint*/
        computeRotate(newPoint: Point): number;
        /**Capture the mouse, remember the original GraphObject#angle, and start a transaction.*/
        doActivate();
        /**Restore the original GraphObject#angle of the adorned object.*/
        doCancel();
        /**Stop the current transaction and release the mouse.*/
        doDeactivate();
        /**Call #rotate with a new angle determined by the current mouse point.*/
        doMouseMove();
        /**Call #rotate with an angle based on the most recent mouse point, commit the transaction, and raise the "PartRotated" DiagramEvent.*/
        doMouseUp();
        /**Change the angle of the selected part's Part#rotateObject. @param {number} newangle*/
        rotate(newangle: number);
        /**Show an Adornment with a rotate handle at a point to the side of the adorned object if the part is selected and visible and if Part#canRotate() is true.*/
        updateAdornments(part: Part);
    }
    /**
    * The TextEditingTool is used to let the user interactively edit text in place.
    * You do not normally need to create an instance of this tool
    * because one already exists as the ToolManager#clickSelectingTool.
    */
    class TextEditingTool extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the ToolManager#textEditingTool, which you can modify.*/
        constructor();         
        /**Gets or sets the HTML element that edits the text.*/
        currentTextEditor: Element;
        /**Gets or sets the HTML element that edits the text.*/
        defaultTextEditor: Element;
        /**Gets or sets how user gestures can start in-place editing of text.*/
        starting: EnumValue;
        /**Gets or sets the TextBlock that is being edited.*/
        textBlock: TextBlock;
        /**Gets or sets the predicate that determines whether or not a string of text is valid.*/
        textValidation: any;
        /**Finish editing by trying to accept the new text.
        * @param {EnumValue} reason The reason must be either TextEditingTool#LostFocus,
        * TextEditingTool#MouseDown, TextEditingTool#Tab, or TextEditingTool#Enter.*/
        acceptText(reason: EnumValue);
        /**This may run when there is a mouse-click on a TextBlock for which the TextBlock#editable property is true in a Part that Part#isSelected.*/
        canStart(): boolean;
        /**Start editing the text for a TextBlock.*/
        doActivate();
        /**Abort any text editing operation.*/
        doCancel();
        /**Release the mouse.*/
        doDeactivate();
        /**A click (mouse up) calls TextEditingTool#doActivate if this tool is not already active and if TextEditingTool#canStart returns true.*/
        doMouseDown(); 
        /**A click (mouse up) calls TextEditingTool#doActivate if this tool is not already active and if TextEditingTool#canStart returns true.*/
        doMouseUp();
        /**This calls TextEditingTool#doActivate if there is a TextBlock supplied.*/
        doStart();
        /**This predicate checks any TextBlock#textValidation predicate and this tool's #textValidation predicate to make sure the TextBlock#text property may be set to the new string.
        * @param {TextBlock} textblock the TextBlock that is being edited.
        * @param {string} oldstr the previous string value.
        * @param {string} newstr the proposed new string value.*/
        isValidText(textblock: TextBlock, oldstr: string, newstr: string): boolean;
        /**The user has typed ENTER.*/
        static Enter: EnumValue;
        /**The text editing control has lost focus.*/
        static LostFocus: EnumValue;
        /**The user has clicked somewhere else in the diagram.*/
        static MouseDown: EnumValue;
        /**A single click on a TextBlock with TextBlock#editable property set to true will start in-place editing.*/
        static SingleClick: EnumValue;
        /**A single click on a TextBlock with TextBlock#editable property set to true will start in-place editing, but only if the Part that the TextBlock is in is already selected.*/
        static SingleClickSelected: EnumValue;
        /**The user has typed TAB.*/
        static Tab: EnumValue;
    }
    /**
    * Tools handle mouse events and keyboard events.
    * The currently running tool, Diagram#currentTool, receives all input events from the Diagram.
    */
    class Tool {
        /**Don't construct this directly -- this is an abstract class.*/
        constructor();
        /**Gets the Diagram that owns this tool and for which this tool is handling input events.*/
        diagram: Diagram;
        /**Gets or sets whether this tool is started and is actively doing something.*/
        isActive: boolean;
        /**Gets or sets whether this tool can be started by a mouse event.*/
        isEnabled: boolean;
        /**Gets or sets the name of this tool.*/
        name: string;
        /**Gets or sets the name of the transaction to be committed by #stopTransaction; if null, the transaction will be rolled back.*/
        transactionResult: any;
        /**This is called to cancel any running "WaitAfter" timer.*/
        cancelWaitAfter();
        /**This predicate is used by the ToolManager to decide if this tool can be started mode-lessly by mouse and touch events.*/
        canStart(): boolean;
        /**This method is called by the diagram after setting Diagram#currentTool, to make the new tool active.*/
        doActivate();
        /**The diagram will call this method when the user wishes to cancel the current tool's operation.*/
        doCancel();
        /**This method is called by the diagram on the old tool when Diagram#currentTool is set to a new tool.*/
        doDeactivate();
        /**The diagram will call this method upon a key down event.*/
        doKeyDown();
        /**The diagram will call this method upon a key up event.*/
        doKeyUp();
        /**The diagram will call this method upon a mouse down event.*/
        doMouseDown();
        /**The diagram will call this method upon a mouse move event.*/
        doMouseMove();
        /**The diagram will call this method upon a mouse up event.*/
        doMouseUp();
        /**The diagram will call this method as the mouse wheel is rotated.*/
        doMouseWheel();
        /**This method is called by the diagram when this tool becomes the current tool; you should not call this method.*/
        doStart();
        /**This method is called by the diagram when this tool stops being the current tool; you should not call this method.*/
        doStop();
        /**This is called a certain delay after a call to #standardWaitAfter if there has not been any call to #cancelWaitAfter.*/
        doWaitAfter();
        /**This convenience function finds the front-most GraphObject that is at a given point and that is part of an Adornment that is of a given category.
        * @param {Point} p a Point in document coordinates.
        * @param {string} category the required Part#category of the Adornment.*/
        findToolHandleAt(p: Point, category: string): GraphObject;
        /**Return true when the last mouse point is far enough away from the first mouse down point to constitute a drag operation instead of just a potential click.
        * @param {Point=} first Point in view coordinates, defaults to Diagram#firstInput's InputEvent#viewPoint.
        * @param {Point=} last Point in view coordinates, defaults to Diagram#lastInput's InputEvent#viewPoint.
        */
        isBeyondDragSize(first?: Point, last?: Point): boolean;
        /**Implement the standard behavior for mouse clicks, searching for and calling click handler functions on GraphObjects or on Diagram, and raising the corresponding DiagramEvent.
        * @param {function(GraphObject):GraphObject | null=} navig An optional custom navigation
        * function to find target objects.
        * @param {function(GraphObject):boolean | null=} pred An optional custom predicate*/
        standardMouseClick(navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => GraphObject);
        /**Implement the standard behavior for mouse enter, over, and leave events, where the mouse is moving but no button is pressed.*/
        standardMouseOver();
        /**Implement the standard behavior for selecting parts with the mouse, depending on the control and shift modifier keys.*/
        standardMouseSelect();
        /**Implement the standard behavior for mouse wheel events.*/
        standardMouseWheel();
        /**This is called to start a new timer to call #doWaitAfter after a given delay.
        * @param {number} delay*/
        standardWaitAfter(delay: number);
        /**Call Diagram#startTransaction with the given transaction name.*/
        startTransaction(tname?: string): boolean;
        /**If the Diagram#currentTool is this tool, stop this tool and start the Diagram#defaultTool by making it be the new current tool.*/
        stopTool();
        /**If #transactionResult is null, call Diagram#rollbackTransaction, otherwise call Diagram#commitTransaction.*/
        stopTransaction(): boolean;
        /**The diagram asks each tool to update any adornments the tool might use for a given part.*/
        updateAdornments(part: Part);
    }
    /** 
    * This special Tool is responsible for managing all of the Diagram's
    * mode-less tools.
    */
    class ToolManager extends Tool {
        /**You do not normally need to create an instance of this tool because one already exists as the Diagram#toolManager, which you can modify.*/
        constructor();
        /**Gets or sets the mode-less ActionTool, normally one of the #mouseDownTools.*/
        actionTool: ActionTool;
        /**Gets or sets the mode-less ClickCreatingTool, normally one of the #mouseUpTools.*/
        clickCreatingTool: ClickCreatingTool;
        /**Gets or sets the mode-less ClickSelectingTool, normally one of the #mouseUpTools.*/
        clickSelectingTool: ClickSelectingTool;
        /**Gets or sets the mode-less ContextMenuTool, normally one of the #mouseUpTools.*/
        contextMenuTool: ContextMenuTool;
        /**Gets the currently showing tooltip, or null if there is none.*/
        currentToolTip: Adornment;
        /**Gets or sets the mode-less DraggingTool, normally one of the #mouseMoveTools.*/
        draggingTool: DraggingTool;
        /**Gets or sets the mode-less DragSelectingTool, normally one of the #mouseMoveTools.*/
        dragSelectingTool: DragSelectingTool;
        /**Gets or sets the distance in view coordinates within which a mouse down-and-up is considered a click and beyond which a mouse movement is considered a drag.*/
        dragSize: Size;
        /**Gets or sets the time between when the mouse stops moving and a hold event, in milliseconds.*/
        holdDelay: number;
        /**Gets or sets the time between when the mouse stops moving and a hover event, in milliseconds.*/
        hoverDelay: number;
        /**Gets or sets the mode-less LinkingTool, normally one of the #mouseMoveTools.*/
        linkingTool: LinkingTool;
        /**Gets or sets the mode-less LinkReshapingTool, normally one of the #mouseDownTools.*/
        linkReshapingTool: LinkReshapingTool;
        /**Gets the list of Tools that might be started upon a mouse-down event.*/
        mouseDownTools: List;
        /**Gets the list of Tools that might be started upon a mouse-move event.*/
        mouseMoveTools: List;
        /**Gets the list of Tools that might be started upon a mouse-up event.*/
        mouseUpTools: List;
        /**Gets or sets the ToolManager's mouse wheel behavior.*/
        mouseWheelBehavior: EnumValue;
        /**Gets or sets the mode-less PanningTool, normally one of the #mouseMoveTools.*/
        panningTool: PanningTool;
        /**Gets or sets the mode-less RelinkingTool, normally one of the #mouseDownTools.*/
        relinkingTool: RelinkingTool;
        /**Gets or sets the mode-less ResizingTool, normally one of the #mouseDownTools.*/
        resizingTool: ResizingTool;
        /**Gets or sets the mode-less RotatingTool, normally one of the #mouseDownTools.*/
        rotatingTool: RotatingTool;
        /**Gets or sets the mode-less TextEditingTool, normally one of the #mouseUpTools.*/
        textEditingTool: TextEditingTool;
        /**This just calls CommandHandler#doKeyDown on the diagram's Diagram#commandHandler.*/
        doKeyDown();
        /**This just calls CommandHandler#doKeyUp on the diagram's Diagram#commandHandler.*/
        doKeyUp();
        /**Iterate over the #mouseDownTools list and start the first tool for which its Tool#canStart predicate returns true.*/
        doMouseDown();
        /**Implement the standard behavior for mouse hover and mouse hold events, called by #doWaitAfter when the mouse has not moved for a period of time.*/
        doMouseHover();
        /**Iterate over the #mouseMoveTools list and start the first tool for which its Tool#canStart predicate returns true.*/
        doMouseMove();
        /**Iterate over the #mouseUpTools list and start the first tool for which its Tool#canStart predicate returns true.*/
        doMouseUp();
        /**The diagram will call this method as the mouse wheel is rotated.*/
        doMouseWheel();
        /**Implement the standard behavior for tooltips, called by #doWaitAfter when the mouse has not moved for a period of time.*/
        doToolTip();
        /**Implement the standard behavior for when the mouse has not moved for a period of time.*/
        doWaitAfter();
        /**Find a mouse tool of a given name. @param {string} name*/
        findTool(name: string): Tool;
        /**Hide any tooltip.*/
        hideToolTip();
        /**Initialize the three mouse tool lists with instances of the standard tools.*/
        initializeStandardTools();
        /**This is called by #showToolTip to position the part within the viewport.
        * @param {Adornment} tooltip
        * @param {GraphObject} obj The GraphObject getting the tooltip,*/
        positionToolTip(tooltip: Adornment, obj: GraphObject);
        /**Replace a mouse tool of a given name with a new tool.
        * @param {string} name the type of tool, such as "Dragging" or "ClickSelecting".
        * @param {Tool} newtool If null, any tool that the search finds will just be removed
        * from the list in which it was found.*/
        replaceTool(name: string, newtool: Tool): Tool;
        /**Show a tooltip Adornment.
        * @param {Adornment} tooltip
        * @param {GraphObject} obj The GraphObject getting the tooltip; this is null if the tooltip is being shown for the diagram background.
        */
        showToolTip(tooltip: Adornment, obj: GraphObject);
        /**This value for #mouseWheelBehavior indicates that the mouse wheel events are ignored, although scrolling or zooming by other means may still be allowed.*/
        static WheelNone: EnumValue;
        /**This default value for #mouseWheelBehavior indicates that mouse wheel events scroll the diagram.*/
        static WheelScroll: EnumValue;
        /**This value for #mouseWheelBehavior indicates that the mouse wheel events change the scale of the diagram.*/
        static WheelZoom: EnumValue;
    }
    /**
    * This interface is implemented by the List, Set, and Map
    * classes; it provides the #iterator read-only property that returns an Iterator.
    */
    class Iterable {
        /**This is an interface and thus does not have a constructor.*/
        constructor();
        /**Gets an Iterator that can iterate over the items in the collection.*/
        iterator: Iterator;
    }
    /**
    * This interface defines properties and methods for iterating over a collection;
    * it provides the #next predicate and the #value read-only property.
    * Some Iterators also provide key property values along with each value.
    */
    class Iterator extends Iterable {
        /**This is an interface and thus does not have a constructor.*/
        /**Gets the total number of items in the iterated collection.*/
        count: number;
        /**Returns itself, which is convenient for code that expects an Iterable instead of an Iterator.*/
        iterator: Iterator;
        /**Gets the current index to the item in the collection, assuming #next has just returned true.*/
        key;
        /**Gets the current item in the collection, assuming #next has just returned true.*/
        value;
        /**Return the first item in the collection, or null if there is none.*/
        first(): any;
        /**Call this method to advance the iterator to the next item in the collection.*/
        next(): boolean;
        /**Start this iterator all over again.*/
        reset();
    }
    /**
    * An ordered iterable collection.
    * It optionally enforces the type of elements that may be added to the List.
    */
    class List {
        /**There are three possible constructors: List(), List(string) where string is a primitive type ('number', 'string', 'boolean', or 'function'), or List(func) where func is a class function/constructor, such as GraphObject.*/
        constructor(type?: string);
        constructor(type: (...args: any[]) => any); 
        /**Gets the length of the List.*/
        count: number;
        /**Gets an object that you can use for iterating over the List.*/
        iterator: Iterator;
        /**Gets an object that you can use for iterating over the List in backwards order.*/
        iteratorBackwards: Iterator;
        /**Gets the length of the List, a synonym for the #count property.*/
        length: number;
        /**Adds a given value to the end of the List.*/
        add(val: any);
        /**Adds all of the values of a collection to the end of this List.*/
        addAll(coll: any): List;
        /**Clears the List.*/
        clear();
        /**Returns whether the given value is in this List.*/
        contains(val: any): boolean;
        /**Makes a shallow copy of this List.*/
        copy(): List;
        /**Returns the element at the given index.*/
        elt(i: number);
        /**Returns the first item in the collection, or null if there is none.*/
        first();
        /**Returns the index of the given value if it is in this List.*/
        indexOf(val: any): number;
        /**Insert a value before the index i.*/
        insertAt(i: number, val: any);
        /**Removes a given value (if found) from the List.*/
        remove(val: any): boolean;
        /**Removes a value at a given index from the List.*/
        removeAt(i: number);
        /**Removes a range of values from the List.*/
        removeRange(to: number, from: number);
        /**Reverse the order of items in this List.*/
        reverse(): List;
        /**Set the element at the given index to a given value.*/
        setElt(i: number, val: any);
        /**Sort the List according to a comparison function.*/
        sort(sortfunc: any): List;
        /**Produces a JavaScript Array from the contents of this List.*/
        toArray(): Array;
        /**Converts the List to a Set.*/
        toSet(): Set;
    }
    /**
    * An unordered iterable collection of key/value pairs that cannot contain two instances of the
    * same key.
    * It optionally enforces the type of the key and the type of the associated value.
    */
    class Map {
        /**The two optional arguments to the constructor describe the types of keys and the types of values that this Map may hold.*/
        constructor(keytype?: any, valtype?: any);
        /**Gets the number of associations in the Map.*/
        count: number;
        /**Gets an object that you can use for iterating over the Map.*/
        iterator: Iterator;
        /**Adds a key-value association to the Map, or replaces the value associated with the key if the key was already present in the map.*/
        add(key: any, val: any): boolean;
        /**Adds all of the key-value pairs of another Map to this Map.*/
        addAll(map: Map): Map;
        /**Clears the Map, removing all key-value associations.*/
        clear();
        /**Returns whether the given key is in this Map.*/
        contains(key: any): boolean;
        /**Makes a shallow copy of this Map.*/
        copy(): Map;
        /**Returns the value associated with a key.*/
        getValue(key: any);
        /**Removes a key (if found) from the Map.*/
        remove(key: any): boolean;
        /**Produces a JavaScript Array of key/value pair objects from the contents of this Map.*/
        toArray(): Array;
        /**Produces a Set that provides a read-only view onto the keys of this Map.*/
        toKeySet(): Set;
    }
    /**
    * An unordered iterable collection that cannot contain two instances of the same kind of value.
    * It optionally enforces the type of elements that may be added to the Set.
    */
    class Set {
        /**There are three possible constructors: Set(), Set(string) where string is a primitive type ('number' or 'string'), or Set(func) where func is a class function/constructor, such as GraphObject.*/
        constructor(type?: string);
        constructor(type: (...args: any[]) => any); 
        /**Gets the number of elements in the Set.*/
        count: number;
        /**Gets an object that you can use for iterating over the Set.*/
        iterator: Iterator;
        /**Adds a given value to the Set, if not already present.*/
        add(val: any): boolean;
        /**Adds all of the values of a collection to this Set.*/
        addAll(coll: any): Set;
        /**Clears the Set.*/
        clear();
        /**Returns whether the given value is in this Set.*/
        contains(val: any): boolean;
        /**Returns true if all of the values of a given collection are in this Set.*/
        containsAll(coll: Iterable): boolean;
        /**Returns true if any of the values of a given collection are in this Set.*/
        containsAny(coll: Iterable): boolean;
        /**Makes a shallow copy of this Set.*/
        copy(): Set;
        /**Returns the first item in the collection, or null if there is none.*/
        first();
        /**Removes a value (if found) from the Set.*/
        remove(val: any): boolean;
        /**Removes all of the values of a collection from this Set.*/
        removeAll(coll: Iterable): Set;
        /**Removes from this Set all items that are not in the given collection.*/
        retainAll(coll: Iterable): Set;
        /**Produces a JavaScript Array from the contents of this Set.*/
        toArray(): Array;
        /**Converts the Set to a List.*/
        toList(): List;
    }
    /**
    * An adornment is a special kind of Part that is associated with another Part,
    * the Adornment#adornedPart.
    * Adornments are normally associated with a particular GraphObject in the adorned part --
    * that is the value of #adornedObject.
    * However, the #adornedObject may be null, in which case the #adornedPart will also be null.
    */
    class Adornment extends Part {
         /* @param {EnumValue= } type if not supplied, the default Panel type is Panel#Position.*/
        constructor(type?: EnumValue);
        /**Gets or sets the GraphObject that is adorned.*/
        adornedObject: GraphObject;
        /**Gets the Part that contains the adorned object.*/
        adornedPart: Part;
        /**Gets a Placeholder that this Adornment may contain in its visual tree.*/
        placeholder: Placeholder;
    }
    /**
    * The Diagram#commandHandler implements various
    * commands such as CommandHandler#deleteSelection or CommandHandler#redo.
    * The CommandHandler includes keyboard event handling to interpret
    * key presses as commands.
    */
    class CommandHandler {
        /**The constructor produces a CommandHandler with the default key bindings.*/
        constructor();
        /**Gets or sets a data object that is copied by #groupSelection when creating a new Group.*/
        archetypeGroupData: Object;
        /**Gets or sets whether #copySelection should also copy subtrees.*/
        copiesTree: boolean;
        /**Gets or sets whether #deleteSelection should also delete subtrees.*/
        deletesTree: boolean;
        /**Gets the Diagram that is using this CommandHandler.*/
        diagram: Diagram;
        /**Gets or sets the predicate that determines whether or not a node may become a member of a group.*/
        memberValidation: any;
        /**Gets or sets the amount by which #decreaseZoom and #increaseZoom change the Diagram#scale.*/
        zoomFactor: number;
        /**Make sure all of the unnested Parts in the given collection are removed from any containing Groups.
        * @param {Iterable} coll a collection of Parts.
        * @param {boolean=} check whether to call #isValidMember to confirm that changing the Part to be a top-level Part is valid.
        */
        addTopLevelParts(coll: Iterable, check?: boolean): boolean;
        /**This predicate controls whether the user can collapse any selected expanded Groups.
        * @param {Group=} group if supplied, ignore the selection and consider collapsing this particular Group.
        */
        canCollapseSubGraph(group?: Group): boolean;
        /**This predicate controls whether the user can collapse any selected expanded subtrees of Nodes.
        * @param {Node=} node if supplied, ignore the selection and consider collapsing this particular Node.
        */
        canCollapseTree(node?: Node): boolean;
        /**This predicate controls whether or not the user can invoke the #copySelection command.*/
        canCopySelection(): boolean;
        /**This predicate controls whether or not the user can invoke the #cutSelection command.*/
        canCutSelection(): boolean;
        /**This predicate controls whether or not the user can invoke the #decreaseZoom command.
        * @param {number=} factor This defaults to 5%, #zoomFactor.  The value should be less than one.
        */
        canDecreaseZoom(factor?: number): boolean;
        /**This predicate controls whether or not the user can invoke the #deleteSelection command.*/
        canDeleteSelection(): boolean;
        /**This predicate controls whether or not the user can invoke the #editTextBlock command.
        * @param {TextBlock=} textblock the TextBlock to consider editing.*/
        canEditTextBlock(textblock?: TextBlock): boolean;
        /**This predicate controls whether the user can expand any selected collapsed Groups.
        * @param {Group=} group if supplied, ignore the selection and consider expanding this particular Group.
        */
        canExpandSubGraph(group?: Group): boolean;
        /**This predicate controls whether the user can expand any selected collapsed subtrees of Nodes.
        * @param {Node=} node if supplied, ignore the selection and consider expanding this particular Node.
        */
        canExpandTree(node?: Node): boolean;
        /**This predicate controls whether or not the user can invoke the #groupSelection command.*/
        canGroupSelection(): boolean;
        /**This predicate controls whether or not the user can invoke the #increaseZoom command.
        * @param {number=} factor This defaults to 5%, #zoomFactor.  The value should be greater than one.
        */
        canIncreaseZoom(factor?: number): boolean;
        /**This predicate controls whether or not the user can invoke the #pasteSelection command.*/
        canPasteSelection(): boolean;
        /**This predicate controls whether or not the user can invoke the #redo command.*/
        canRedo(): boolean;
        /**This predicate controls whether or not the user can invoke the #resetZoom command.
        * @param {number=} newscale This defaults to 1.  The value should be greater than zero.
        */
        canResetZoom(newscale?: number): boolean;
        /**This predicate controls whether or not the user can invoke the #selectAll command.*/
        canSelectAll(): boolean;
        /**This predicate controls whether the user may stop the current tool.*/
        canStopCommand(): boolean;
        /**This predicate controls whether or not the user can invoke the #undo command.*/
        canUndo(): boolean;
        /**This predicate controls whether or not the user can invoke the #ungroupSelection command.
        * @param {Group=} group if supplied, ignore the selection and consider ungrouping this particular Group.
        */
        canUngroupSelection(group?: Group): boolean;
        /**This predicate controls whether or not the user can invoke the #zoomToFit command.*/
        canZoomToFit(): boolean;
        /**Collapse all expanded selected Groups.
        * @param {Group=} group if supplied, ignore the selection and collapse this particular Group.
        */
        collapseSubGraph(group?: Group);
        /**Collapse all expanded selected Nodes.
        * @param {Node=} node if supplied, ignore the selection and collapse this particular Node subtree.*/
        collapseTree(node?: Node);
        /**Copy the currently selected parts, Diagram#selection, from the Diagram into the clipboard.*/
        copySelection();
        /**This makes a copy of the given collection of Parts and stores it in a static variable acting as the clipboard.
        * @param {Iterable} coll A collection of Parts.*/
        copyToClipboard(coll: Iterable);
        /**Execute a #copySelection followed by a #deleteSelection.*/
        cutSelection();
        /**Decrease the Diagram#scale by a given factor.
        * @param {number=} factor This defaults to #zoomFactor.  The value should be less than one.*/
        decreaseZoom(factor?: number);
        /**Delete the currently selected parts from the diagram.*/
        deleteSelection();
        /**This is called by tools to handle keyboard commands.*/
        doKeyDown();
        /**This is called by tools to handle keyboard commands.*/
        doKeyUp();
        /**Start in-place editing of a TextBlock in the selected Part.
        * @param {TextBlock=} textblock the TextBlock to start editing.*/
        editTextBlock(textblock?: TextBlock);
        /**Expand all collapsed selected Groups.
        * @param {Group=} group if supplied, ignore the selection and expand this particular Group.*/
        expandSubGraph(group?: Group);
        /**Expand all collapsed selected Nodes.
        * @param {Node=} node if supplied, ignore the selection and collapse this particular Node subtree.*/
        expandTree(node?: Node);
        /**Add a copy of #archetypeGroupData and add it to the diagram's model to create a new Group and then add the selected Parts to that new group.*/
        groupSelection();
        /**Increase the Diagram#scale by a given factor.*/
        increaseZoom(factor?: Number);
        /**This predicate is called to determine whether a Node may be added as a member of a Group.
        * @param {Group} group this may be null if the node is being added as a top-level node.
        * @param {Part} part a Part, usually a Node, possibly another Group, but not a Link or an Adornment.*/
        isValidMember(group: Group, part: Part): boolean;
        /**If the clipboard holds a collection of Parts, and if the Model#dataFormat matches that stored in the clipboard, this makes a copy of the clipboard's parts and adds the copies to this Diagram.*/
        pasteFromClipboard(): Iterable;
        /**Copy the contents of the clipboard into this diagram, and make those new parts the new selection.
        * @param {Point=} pos Point at which to center the newly pasted parts; if not present the parts are not moved.
        */
        pasteSelection(pos?: Point);
        /**Call UndoManager#redo.*/
        redo();
        /**Set the Diagram#scale to a new scale value, by default 1.
        * @param {number=} newscale This defaults to 1.  The value should be greater than zero.*/
        resetZoom(newscale?: number);
        /**Select all of the selectable Parts in the diagram.*/
        selectAll();
        /**Cancel the operation of the current tool.*/
        stopCommand();
        /**Call UndoManager#undo.*/
        undo();
        /**Remove the group from the diagram without removing its members from the diagram.
        * @param {Group=} group if supplied, ignore the selection and consider ungrouping this particular Group.*/
        ungroupSelection(group?: Group);
        /**Change the Diagram#scale so that the Diagram#documentBounds fits within the viewport.*/
        zoomToFit();
    }
    /**
    * A Diagram is associated with an HTML div element. Constructing a Diagram creates
    * an HTML Canvas element which it places inside of the given div element, in addition to several helper divs.
    * GoJS will manage the contents of this div, and the contents should not be modified otherwise,
    * though the given div may be styled (background, border, etc) and positioned as needed.
    */
    class Diagram {
        /** Construct an empty Diagram for a particular DIV HTML element.
        * @param {Element|string=} div A reference to a div or its ID as a string.
        * If no div is supplied one will be created in memory. The Diagram's Diagram#div property
        * can then be set later on.*/
        constructor(div: Element);
        constructor(div?: string);
        /**Gets or sets whether the user may copy to or paste parts from the internal clipboard.*/
        allowClipboard: boolean;
        /**Gets or sets whether the user may copy objects.*/
        allowCopy: boolean;
        /**Gets or sets whether the user may delete objects from the Diagram.*/
        allowDelete: boolean;
        /**Gets or sets whether the user may start a drag-and-drop in this Diagram, possibly dropping in a different element.*/
        allowDragOut: boolean;
        /**Gets or sets whether the user may end a drag-and-drop operation in this Diagram.*/
        allowDrop: boolean;
        /**Gets or sets whether the user may group parts together.*/
        allowGroup: boolean;
        /**Gets or sets whether the user is allowed to use the horizontal scrollbar.*/
        allowHorizontalScroll: boolean;
        /**Gets or sets whether the user may add parts to the Diagram.*/
        allowInsert: boolean;
        /**Gets or sets whether the user may draw new links.*/
        allowLink: boolean;
        /**Gets or sets whether the user may move objects.*/
        allowMove: boolean;
        /**Gets or sets whether the user may reconnect existing links.*/
        allowRelink: boolean;
        /**Gets or sets whether the user may reshape parts.*/
        allowReshape: boolean;
        /**Gets or sets whether the user may resize parts.*/
        allowResize: boolean;
        /**Gets or sets whether the user may rotate parts.*/
        allowRotate: boolean;
        /**Gets or sets whether the user may select objects.*/
        allowSelect: boolean;
        /**Gets or sets whether the user may do in-place text editing.*/
        allowTextEdit: boolean;
        /**Gets or sets whether the user may undo or redo any changes.*/
        allowUndo: boolean;
        /**Gets or sets whether the user may ungroup existing groups.*/
        allowUngroup: boolean;
        /**Gets or sets whether the user is allowed to use the vertical scrollbar.*/
        allowVerticalScroll: boolean;
        /**Gets or sets whether the user may zoom into or out of the Diagram.*/
        allowZoom: boolean;
        /**Gets or sets the autoScale of the Diagram, controlling whether or not the Diagram's bounds automatically scale to fit the view.*/
        autoScale: EnumValue;
        /**Gets or sets the Margin that describes the Diagram's autoScrollRegion.*/
        autoScrollRegion: any;
        /**Gets or sets the function to execute when the user single-primary-clicks on the background of the Diagram.*/
        click: any;
        /**Gets or sets the CommandHandler for this Diagram.*/
        commandHandler: CommandHandler;
        /**Gets or sets the content alignment Spot of this Diagram, to be used in determining how parts are positioned when the #viewportBounds width or height is smaller than the #documentBounds.*/
        contentAlignment: Spot;
        /**Gets or sets the function to execute when the user single-secondary-clicks on the background of the Diagram.*/
        contextClick: any;
        /**This Adornment is shown when the use context clicks in the background.*/
        contextMenu: Adornment;
        /**Gets or sets the current cursor for the Diagram, overriding the #defaultCursor.*/
        currentCursor: string;
        /**Gets or sets the current tool for this Diagram that handles all input events.*/
        currentTool: Tool;
        /**Gets or sets the cursor to be used for the Diagram when no GraphObject specifies a different cursor.*/
        defaultCursor: string;
        /**Gets or sets the default tool for this Diagram that becomes the current tool when the current tool stops.*/
        defaultTool: Tool;
        /**Gets or sets the Diagram's HTMLDivElement, via an HTML Element ID.*/
        div: HTMLDivElement;
        /**Gets the model-coordinate bounds of the Diagram.*/
        documentBounds: Rect;
        /**Gets or sets the function to execute when the user double-primary-clicks on the background of the Diagram.*/
        doubleClick: any;
        /**Gets or sets the most recent mouse-down InputEvent that occurred.*/
        firstInput: InputEvent;
        /**Gets or sets a fixed bounding rectangle to be returned by #documentBounds and #computeBounds.*/
        fixedBounds: Rect;
        /**Gets or sets a Panel of type Panel#Grid acting as the background grid extending across the whole viewport of this diagram.*/
        grid: Panel;
        /**Gets or sets the default selection Adornment template, used to adorn selected Groups.*/
        groupSelectionAdornmentTemplate: Adornment;
        /**Gets or sets the default Group template used as the archetype for group data that is added to the #model.*/
        groupTemplate: Part;
        /**Gets or sets a Map mapping template names to Groups.*/
        groupTemplateMap: Map;
        /**Gets or sets whether the Diagram has a horizontal Scrollbar.*/
        hasHorizontalScrollbar: boolean;
        /**Gets or sets whether the Diagram has a vertical Scrollbar.*/
        hasVerticalScrollbar: boolean;
        height: number;
        /**Gets or sets the initialAutoScale of the Diagram.*/
        initialAutoScale: EnumValue;
        /**Gets or sets the intial content alignment Spot of this Diagram, to be used in determining how parts are positioned initially relative to the viewport.*/
        initialContentAlignment: Spot;
        /**Gets or sets the spot in the document's area that should be coincident with the #initialViewportSpot of the viewport when the document is first initialized.*/
        initialDocumentSpot: Spot;
        /**Gets or sets the initial coordinates of this Diagram in the viewport, eventually setting the #position.*/
        initialPosition: Point;
        /**Gets or sets the initial scale of this Diagram in the viewport, eventually setting the #scale.*/
        initialScale: number;
        /**Gets or sets the spot in the viewport that should be coincident with the #initialDocumentSpot of the document when the document is first initialized.*/
        initialViewportSpot: Spot;
        /**Gets or sets whether the user may interact with the Diagram.*/
        isEnabled: boolean;
        /**Gets or sets whether the Diagram's Diagram#model is Model#isReadOnly.*/
        isModelReadOnly: boolean;
        /**Gets or sets whether this Diagram's state has been modified.*/
        isModified: boolean;
        /**Gets or sets whether mouse events initiated within the Diagram will be captured.*/
        isMouseCaptured: boolean;
        /**Gets or sets whether the Diagram may be modified by the user, while still allowing the user to scroll, zoom, and select.*/
        isReadOnly: boolean;
        /**Gets or sets whether the Diagram tree structure is defined by links going from the parent node to their children, or vice-versa.*/
        isTreePathToChildren: boolean;
        /**Gets or sets the last InputEvent that occurred.*/
        lastInput: InputEvent;
        /**Gets an iterator for this Diagram's Layers.*/
        layers: Iterator;
        /**Gets or sets the Layout used to position all of the top-level nodes and links in this Diagram.*/
        layout: Layout;
        /**Returns an iterator of all Links in the Diagram.*/
        links: Iterator;
        /**Gets or sets the default selection Adornment template, used to adorn selected Links.*/
        linkSelectionAdornmentTemplate: Adornment;
        /**Gets or sets the default Link template used as the archetype for link data that is added to the #model.*/
        linkTemplate: Part;
        /**Gets or sets a Map mapping template names to Links.*/
        linkTemplateMap: Map;
        /**Gets or sets the largest value that #scale may take.*/
        maxScale: number;
        /**Gets or sets the maximum number of selected objects.*/
        maxSelectionCount: number;
        /**Gets or sets the smallest value greater than zero that #scale may take.*/
        minScale: number;
        /**Gets or sets the Model holding data corresponding to the data-bound nodes and links of this Diagram.*/
        model: Model;
        /**Gets or sets the function to execute when the user is dragging the selection in the background of the Diagram during a DraggingTool drag-and-drop, not over any GraphObjects.*/
        mouseDragOver: (a:InputEvent)=>any;
        /**Gets or sets the function to execute when the user drops the selection in the background of the Diagram at the end of a DraggingTool drag-and-drop, not onto any GraphObjects.*/
        mouseDrop: (a: InputEvent) => any;
        /**Gets or sets the function to execute when the user holds the mouse stationary in the background of the Diagram while holding down a button, not over any GraphObjects.*/
        mouseHold: (a: InputEvent) => any;
        /**Gets or sets the function to execute when the user holds the mouse stationary in the background of the Diagram without holding down any buttons, not over any GraphObjects.*/
        mouseHover: (a: InputEvent) => any;
        /**Gets or sets the function to execute when the user moves the mouse in the background of the Diagram without holding down any buttons, not over any GraphObjects.*/
        mouseOver: (a: InputEvent) => any;
        /**Returns an iterator of all Nodes and Groups in the Diagram.*/
        nodes: Iterator;
        /**Gets or sets the default selection Adornment template, used to adorn selected Parts other than Groups or Links.*/
        nodeSelectionAdornmentTemplate: Adornment;
        /**Gets or sets the default Node template used as the archetype for node data that is added to the #model.*/
        nodeTemplate: Part;
        /**Gets or sets a Map mapping template names to Parts.*/
        nodeTemplateMap: Map;
        /**Gets or sets the Margin that describes the Diagram's padding, which controls how much extra space there is around the area occupied by the document.*/
        padding: any;
        /**Returns an iterator of all Parts in the Diagram that are not Nodes or Links or Adornments.*/
        parts: Iterator;
        /**Gets or sets the coordinates of this Diagram in the viewport.*/
        position: Point;
        /**Gets or sets the scale transform of this Diagram.*/
        scale: number;
        /**Gets or sets the distance in screen pixels that the horizontal scrollbar will scroll when scrolling by a line.*/
        scrollHorizontalLineChange: number;
        /**Gets or sets the distance in screen pixels that the vertical scrollbar will scroll when scrolling by a line.*/
        scrollVerticalLineChange: number;
        /**Gets the read-only collection of selected objects.*/
        selection: Set;
        /**Gets or sets whether ChangedEvents are not recorded by the UndoManager.*/
        skipsUndoManager: boolean;
        /**Gets the UndoManager for this Diagram, which actually belongs to the #model.*/
        toolManager: ToolManager;
        /**This Adornment is shown when the mouse stays motionless in the background.*/
        toolTip: Adornment;
        /**Gets the UndoManager for this Diagram, which actually belongs to the #model.*/
        undoManager: UndoManager;
        /**Gets or sets what kinds of graphs this diagram allows the user to draw.*/
        validCycle: EnumValue;
        /**Gets the bounds of the portion of the Diagram that is viewable from its HTML Canvas.*/
        viewportBounds: Rect;
        width: number;
        /**Adds a Part to the Layer that matches the Part's Part#layerName, or else the default layer, which is named with the empty string.
        * @param {Part} part*/
        add(part: Part);
        /**Register an event handler that is called when there is a ChangedEvent.
        * @param {function(ChangedEvent)} listener a function that takes a ChangedEvent as its argument.
        */
        addChangedListener(listener: (obj: ChangedEvent)=>any);
        /**Register an event handler that is called when there is a DiagramEvent of a given name.
        * @param {string} name the name is normally capitalized, but this method uses case-insensitive comparison.
        * @param {function(DiagramEvent)} listener a function that takes a DiagramEvent as its argument.
        */
        addDiagramListener(name: string, listener: (obj:DiagramEvent)=>any);
        /**Adds a Layer to the list of layers.
        * @param {Layer} layer The Layer to add.*/
        addLayer(layer: Layer);
        /**Adds a layer to the list of layers after a specified layer.
        * @param {Layer} layer The Layer to add.
        * @param {Layer} existingLayer The layer to insert after.*/
        addLayerAfter(layer: Layer, existingLayer: Layer);
        /**Adds a layer to the list of layers before a specified layer.
        * @param {Layer} layer The Layer to add.
        * @param {Layer} existingLayer The layer to insert before.*/
        addLayerBefore(layer: Layer, existingLayer: Layer);
        /**Aligns the Diagram's #position based on a desired document Spot and viewport Spot.
        * @param {Spot} documentspot
        * @param {Spot} viewportspot*/
        alignDocument(documentspot: Spot, viewportspot: Spot);
        /**Modifies the #position to show a given Rect of the Diagram by centering the viewport on that Rect.
        * @param {Rect} r*/
        centerRect(r: Rect);
        /**Removes all Parts from the Diagram, including unbound Parts and the background grid, and also clears out the Model and UndoManager.*/
        clear();
        /**Deselect all selected Parts.*/
        clearSelection();
        /**Commit the changes of the current transaction.
        * @param {string} tname a descriptive name for the transaction.*/
        commitTransaction(tname: string): boolean;
        /**This is called during a Diagram update to determine a new value for #documentBounds.*/
        computeBounds(): Rect;
        /**Find the union of the GraphObject#actualBounds of all of the Parts in the given collection.
        * @param {Iterable} coll a collection of Parts.*/
        computePartsBounds(coll: Iterable): Rect;
        /**Updates the diagram immediately, then resets initialization flags so that actions taken in the argument function will be considered part of Diagram initialization, and will participate in initial layouts, #initialAutoScale, #initialContentAlignment, etc.
        * @param {function()|null=} func an optional function of actions to perform as part of another diagram initialization.*/
        delayInitialization(func?: (a:any)=>any);
        /**Finds a layer with a given name.
        * @param {string} name*/
        findLayer(name: string): Layer;
        /**Look for a Link corresponding to a GraphLinksModel's link data object.
        * @param {Object} linkdata*/
        findLinkForData(linkdata: Object): Link;
        /**Look for a Node or Group corresponding to a model's node data object.
        * @param {Object} nodedata*/
        findNodeForData(nodedata: Object): Node;
        /**Look for a Node or Group corresponding to a model's node data object's unique key.
        * @param {*} key a string or number.*/
        findNodeForKey(key: any): Node;
        /**Find the front-most GraphObject at the given point in document coordinates.
        * @param {Point} p A Point in document coordinates.
        * @param {function(GraphObject):GraphObject | null=} navig A function taking a GraphObject and
        * returning a GraphObject, defaulting to the identity.
        * @param {function(GraphObject):boolean | null=} pred A function taking the GraphObject
        * returned by navig and returning true if that object should be returned,
        * defaulting to a predicate that always returns true.*/
        findObjectAt(p: Point, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject)=>boolean): GraphObject;
        /**Return a collection of the GraphObjects at the given point in document coordinates.
        * @param {Point} p A Point in document coordinates.
        * @param {function(GraphObject):GraphObject | null=} navig A function taking a GraphObject and
        * returning a GraphObject, defaulting to the identity.
        * If this function returns null, the given GraphObject will not be included in the results.
        * @param {function(GraphObject):boolean | null=} pred A function taking the GraphObject
        * returned by navig and returning true if that object should be returned,
        * defaulting to a predicate that always returns true.
        * @param {List|Set=} coll An optional collection (List or Set) to add the results to.*/
        findObjectsAt(p: Point, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject)=>boolean, coll?: List): Iterable;
        findObjectsAt(p: Point, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, coll?: Set): Iterable;
        /**Returns a collection of all GraphObjects that are inside or that intersect a given Rect in document coordinates.
        * @param {Rect} r A Rect in document coordinates.
        * @param {function(GraphObject):GraphObject | null=} navig A function taking a GraphObject and
        * returning a GraphObject, defaulting to the identity.
        * If this function returns null, the given GraphObject will not be included in the results.
        * @param {function(GraphObject):boolean | null=} pred A function taking the GraphObject
        * returned by navig and returning true if that object should be returned,
        * defaulting to a predicate that always returns true.
        * @param {*=} partialInclusion Whether an object can match if it merely intersects the rectangular area (true) or
        * if it must be entirely inside the rectangular area (false).  The default value is false.
        * @param {List|Set=} coll An optional collection (List or Set) to add the results to.*/
        findObjectsIn(r: Rect, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: any, coll?: List): Iterable;
        findObjectsIn(r: Rect, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: any, coll?: Set): Iterable;
        /**Returns a collection of all GraphObjects that are within a certain distance of a given point in document coordinates.
        * @param {Point} p A Point in document coordinates.
        * @param {number} dist The distance from the point.
        * @param {function(GraphObject):GraphObject | null=} navig A function taking a GraphObject and
        * returning a GraphObject, defaulting to the identity.
        * If this function returns null, the given GraphObject will not be included in the results.
        * @param {function(GraphObject):boolean | null=} pred A function taking the GraphObject
        * returned by navig and returning true if that object should be returned,
        * defaulting to a predicate that always returns true.
        * @param {*=} partialInclusion Whether an object can match if it merely intersects the circular area (true) or
        * if it must be entirely inside the circular area (false).  The default value is true.
        * The default is true.
        * @param {List|Set=} coll An optional collection (List or Set) to add the results to.*/
        findObjectsNear(p: Point, dist: number, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject)=>boolean, partialInclusion?: any, coll?: List): Iterable;
        findObjectsNear(p: Point, dist: number, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: any, coll?: Set): Iterable;
        /**This convenience function finds the front-most Part that is at a given point and that might be selectable.
        * @param {Point} p a Point in document coordinates.
        * @param {boolean} selectable Whether to only consider parts that are Part#selectable.*/
        findPartAt(p: Point, selectable: boolean): Part;
        /**Look for a Part, Node, Group, or Link corresponding to a Model's data object.
        * @param {Object} data*/
        findPartForData(data: Object): Part;
        /**Look for a Part or Node or Group corresponding to a model's data object's unique key.
        * @param {*} key a string or number.*/
        findPartForKey(key: any): Part;
        /**Returns an iterator of all Groups that are at top-level, in other words that are not themselves inside other Groups.*/
        findTopLevelGroups(): Iterator;
        /**Returns an iterator of all top-level Nodes that have no tree parents.*/
        findTreeRoots(): Iterator;
        /**Explicitly bring focus to the Diagram's canvas.*/
        focus();
        /**This static method gets the Diagram that is attached to an HTML DIV element.*/
        static fromDiv(div: any): Diagram;
        /**This static function declares that a class (constructor function) derives from another class -- but please note that most classes do not support inheritance.
        * @param {Function} derivedclass
        * @param {Function} baseclass*/
        static inherit(derivedclass: any, baseclass: any);
        /**Perform all invalid layouts.
        * @param {boolean=} invalidateAll If true, this will explicitly set Layout#isValidLayout to false on each Layout in the diagram.
        */
        layoutDiagram(invalidateAll?: boolean);
        /** Create an HTMLImageElement that contains a bitmap of the current Diagram.*/
        makeImage(properties?: any): HTMLImageElement;
        /**Create a bitmap of the current Diagram encoded as a base64 string.
        * @param {{ size: Size,
            scale: number,
            maxSize: Size,
            position: Point,
            parts: Iterable,
            padding: (Margin|number),
            showTemporary: boolean,
            showGrid: boolean,

            type: string,
            details: *
            }|Object=} properties a JavaScript object detailing optional arguments for image creation, to be passed to makeImageData.
        */
        makeImageData(...properties: any[]): string;
        /**Remove all of the Parts created from model data and then create them again.*/
        rebuildParts();
        /**Removes a Part from its Layer, provided the Layer is in this Diagram.
        * @param {Part} part*/
        remove(part: Part);
        /**Unregister an event handler listener.
        * @param {function(ChangedEvent)} listener a function that takes a ChangedEvent as its argument.
        */
        removeChangedListener(listener: (a:ChangedEvent)=>any);
        /**Unregister a DiagramEvent handler.
        * @param {string} name the name is normally capitalized, but this method uses case-insensitive comparison.
        * @param {function(DiagramEvent)} listener a function that takes a DiagramEvent as its argument.
        */
        removeDiagramListener(name: string, listener: (a:DiagramEvent)=>any);
        /**Removes the given layer from the list of layers.
        * @param {Layer} layer*/
        removeLayer(layer: Layer);
        /**Rollback the current transaction, undoing any recorded changes.*/
        rollbackTransaction(): boolean;
        /**Scrolling function used by primarily by #commandHandler's CommandHandler#doKeyDown. 
        * @param {string} unit A string representing the unit of the scroll operation. Can be 'pixel', 'line', or 'page'.
        * @param {string} dir The direction of the scroll operation. Can be 'up', 'down', 'left', or 'right'.
        * @param {number=} dist An optional distance multiplier, for multiple pixels, lines, or pages. Default is 1.
        */
        scroll(unit: string, dir: string, dist?: number);
        /**Modifies the #position to show a given Rect of the Diagram by centering the viewport on that Rect.
        * @param {Rect} r*/
        scrollToRect(r: Rect);
        /**Make the given object the only selected object.
        * @param {GraphObject} part a GraphObject that is already in a layer of this Diagram.
        * If the value is null, this does nothing.*/
        select(part: Part);
        /**Select all of the Parts supplied in the given collection.
        * @param {Iterable} coll a List or Set of Parts to be selected.*/
        selectCollection(coll: Iterable);
        /**Begin a transaction, where the changes are held by a Transaction object in the UndoManager.
        * @param {string=} tname a descriptive name for the transaction.*/
        startTransaction(tname?: string): boolean;
        /**Given a Point in document coorindates, return a new Point in viewport coordinates.
        * @param {Point} p*/
        transformDocToView(p: Point): Point;
        /**Given a point in viewport coorindates, return a new point in document coordinates.
        * @param {Point} p*/
        transformViewToDoc(p: Point): Point;
        /**Update all of the data-bound properties of Nodes and Links in this diagram.*/
        updateAllTargetBindings();
        /**Scales the Diagram to uniformly fit into the viewport.*/
        zoomToFit();
        /**Modifies the #scale and #position of the Diagram so that the viewport displays a given document-coordinates rectangle.
        * @param {Rect} r rectangular bounds in document coordinates.
        * @param {EnumValue=} scaling an optional value of either #Uniform (the default) or #UniformToFill.
        */
        zoomToRect(r: Rect, scaling?: EnumValue);
        /**This value for Diagram#validCycle states that there are no restrictions on making cycles of links.*/
        static CycleAll: EnumValue;
        /**This value for Diagram#validCycle states that any number of destination links may go out of a node, but at most one source link may come into a node, and there are no directed cycles.*/
        static CycleDestinationTree: EnumValue;
        /**This value for Diagram#validCycle states that a valid link from a node will not produce a directed cycle in the graph.*/
        static CycleNotDirected: EnumValue;
        /**This value for Diagram#validCycle states that a valid link from a node will not produce an undirected cycle in the graph.*/
        static CycleNotUndirected: EnumValue;
        /**This value for Diagram#validCycle states that any number of source links may come into a node, but at most one destination link may go out of a node, and there are no directed cycles.*/
        static CycleSourceTree: EnumValue;
        /**The default autoScale type, used as the value of Diagram#autoScale: The Diagram does not attempt to scale its bounds to fit the view.*/
        static None: EnumValue;
        /**Diagrams with this autoScale type, used as the value of Diagram#autoScale, are scaled uniformly until the documentBounds fits in the view.*/
        static Uniform: EnumValue;
        /**Diagrams with this autoScale type, used as the value of Diagram#autoScale, are scaled uniformly until the documentBounds fits in the view.*/
        UniformToFill: EnumValue;
        maybeUpdate();
    }
    /**
    * A DiagramEvent represents a more abstract event than an InputEvent.
    * They are raised on the Diagram class.
    * One can receive such events by registering a DiagramEvent listener on a Diagram
    * by calling Diagram#addDiagramListener.
    * Some DiagramEvents such as "ObjectSingleClicked" are normally
    * associated with InputEvents.
    * Some DiagramEvents such as "SelectionMoved" or "PartRotated" are associated with the
    * results of Tool-handled gestures or CommandHandler actions.
    * Some DiagramEvents are not necessarily associated with any input events at all,
    * such as "ViewportBoundsChanged", which can happen due to programmatic
    * changes to the Diagram#position and Diagram#scale properties.
    */
    class DiagramEvent {
        /**The DiagramEvent class constructor produces an empty DiagramEvent.*/
        constructor();
        /**Gets or sets whether any default actions associated with this diagram event should be avoided or cancelled.*/
        cancel: boolean;
        /**Gets the diagram associated with the event.*/
        diagram;
        /**Gets or sets the name of the kind of diagram event that this represents.*/
        name: string;
        /**Gets or sets an optional object that describes the change to the subject of the diagram event.*/
        parameter: any;
        /**Gets or sets an optional object that is the subject of the diagram event.*/
        subject: Object;
    }
    /**
    * This is the abstract base class for all graphical objects.
    */
    class GraphObject {
        /**This is an abstract class, so you should not use this constructor.*/
        constructor();
        /**Gets or sets the function to execute when the ActionTool is cancelled and this GraphObject's #isActionable is set to true.*/
        actionCancel: (a:InputEvent, b:GraphObject)=>any;
        /**Gets or sets the function to execute on a mouse-down event when this GraphObject's #isActionable is set to true.*/
        actionDown: (a: InputEvent, b: GraphObject) => any;
        /**Gets or sets the function to execute on a mouse-move event when this GraphObject's #isActionable is set to true.*/
        actionMove: (a: InputEvent, b: GraphObject) => any;
        /**Gets or sets the function to execute on a mouse-up event when this GraphObject's #isActionable is set to true.*/
        actionUp: (a: InputEvent, b: GraphObject) => any;
        /**Gets the bounds of this GraphObject in container coordinates.*/
        actualBounds: Rect;
        /**Gets or sets the alignment Spot of this GraphObject used in Panel layouts, to determine where in the area allocated by the panel this object should be placed.*/
        alignment: Spot;
        /**Gets or sets the spot on this GraphObject to be used as the alignment point in Spot and Fixed Panels.*/
        alignmentFocus: Spot;
        /**Gets or sets the angle transform, in degrees, of this GraphObject.*/
        angle: number;
        /**Gets or sets the areaBackground Brush of this GraphObject.*/
        areaBackground: any;
        /**Gets or sets the background Brush of this GraphObject, filling the rectangle of this object's local coordinate space.*/
        background: any;
        /**Gets or sets the function to execute when the user single-primary-clicks on this object.*/
        click: (a: InputEvent, b: GraphObject) => any;
        /**Gets or sets the column of this GraphObject if it is in a Table Panel.*/
        column: number;
        /**Gets or sets the number of columns spanned by this GraphObject if it is in a Table Panel.*/
        columnSpan: number;
        /**Gets or sets the function to execute when the user single-secondary-clicks on this object.*/
        contextClick: (a: InputEvent, b: GraphObject) => any;
        /**This Adornment is shown upon a context click on this object.*/
        contextMenu: Adornment;
        /**Gets or sets the mouse cursor to use when the mouse is over this object with no mouse buttons pressed.*/
        cursor: string;
        /**Gets or sets the desired size of this GraphObject in local coordinates.*/
        desiredSize: Size;
        /**Gets the Diagram that this GraphObject is in, if it is.*/
        diagram: Diagram;
        /**Gets or sets the function to execute when the user double-primary-clicks on this object.*/
        doubleClick: (a: InputEvent, b: GraphObject) => any;
        /**Gets or sets how the direction of the last segment of a link coming from this port is computed when the node is rotated.*/
        fromEndSegmentDirection: EnumValue;
        /**Gets or sets the length of the last segment of a link coming from this port.*/
        fromEndSegmentLength: number;
        /**Gets or sets whether the user may draw Links from this port.*/
        fromLinkable: any;
        /**Gets or sets whether the user may draw duplicate Links from this port.*/
        fromLinkableDuplicates: boolean;
        /**Gets or sets whether the user may draw Links that connect from this port's Node.*/
        fromLinkableSelfNode: boolean;
        /**Gets or sets the maximum number of links that may come out of this port.*/
        fromMaxLinks: number;
        /**Gets or sets how far the end segment of a link coming from this port stops short of the actual port.*/
        fromShortLength: number;
        /**Gets or sets where a link should connect from this port.*/
        fromSpot: Spot;
        /**Gets or sets the desired height of this GraphObject in local coordinates.*/
        height: number;
        /**This property determines whether or not this GraphObject's events occur before all other events, including selection.*/
        isActionable: boolean;
        /**Gets or sets whether a GraphObject is the "main" object for some types of Panel.*/
        isPanelMain: boolean;
        /**Gets the GraphObject's containing Layer, if there is any.*/
        layer: Layer;
        /**Gets or sets the size of empty area around this GraphObject, as a Margin, in the containing Panel coordinates.*/
        margin: any;
        /**Gets or sets the maximum size of this GraphObject in container coordinates (either a Panel or the document).*/
        maxSize: Size;
        /**Gets the measuredBounds of the GraphObject in container coordinates (either a Panel or the document).*/
        measuredBounds: Rect;
        /**Gets or sets the minimum size of this GraphObject in container coordinates (either a Panel or the document).*/
        minSize: Size;
        /**Gets or sets the function to execute when the user moves the mouse into this stationary object during a DraggingTool drag.*/
        mouseDragEnter: (a:InputEvent, b:GraphObject, c:GraphObject)=>any;
        /**Gets or sets the function to execute when the user moves the mouse out of this stationary object during a DraggingTool drag.*/
        mouseDragLeave: (a: InputEvent, b: GraphObject, c: GraphObject) => any;
        /**Gets or sets the function to execute when a user drops the selection on this object at the end of a DraggingTool drag.*/
        mouseDrop: (a: InputEvent, b: GraphObject) => any;
        /**Gets or sets the function to execute when the user moves the mouse into this object without holding down any buttons.*/
        mouseEnter: (a: InputEvent, b: GraphObject, c:GraphObject) => any;
        /**Gets or sets the function to execute when the user holds the mouse stationary in the background of the diagram while holding down a button over this object.*/
        mouseHold: (a: InputEvent, b: GraphObject) => any;
        /**Gets or sets the function to execute when the user holds the mouse stationary in the background of the diagram without holding down any buttons over this object.*/
        mouseHover: (a: InputEvent, b: GraphObject) => any;
        /**Gets or sets the function to execute when the user moves the mouse into this object without holding down any buttons.*/
        mouseLeave: (a: InputEvent, b: GraphObject, c: GraphObject) => any;
        /**Gets or sets the function to execute when the user moves the mouse over this object without holding down any buttons.*/
        mouseOver: (a: InputEvent, b: GraphObject) => any;
        /**Gets or sets the name for this object.*/
        name: string;
        /**Gets the natural bounding rectangle of this GraphObject in local coordinates, before any transformation by #scale or #angle, and before any resizing due to #minSize or #maxSize or #stretch.*/
        naturalBounds: Rect;
        /**Gets the GraphObject's containing Panel, or null if this object is not in a Panel.*/
        panel: Panel;
        /**Gets the Part containing this object, if any.*/
        part: Part;
        /**Gets or sets whether or not this GraphObject can be chosen by visual "find" methods such as Diagram#findObjectAt.*/
        pickable: boolean;
        /**Gets or sets an identifier for an object acting as a port on a Node.*/
        portId: string;
        /**Gets or sets the position of this GraphObject in container coordinates (either a Panel or the document).*/
        position: Point;
        /**Gets or sets the row of this GraphObject if it is in a Table Panel.*/
        row: number;
        /**Gets or sets the number of rows spanned by this GraphObject if it is in a Table Panel.*/
        rowSpan: number;
        /**Gets or sets the scale transform of this GraphObject.*/
        scale: number;
        /**Gets or sets the fractional distance along a segment of a GraphObject that is in a Link.*/
        segmentFraction: number;
        /**Gets or sets the segment index of a GraphObject that is in a Link.*/
        segmentIndex: number;
        /**Gets or sets the offset of a GraphObject that is in a Link from a point on a segment.*/
        segmentOffset: Point;
        /**Gets or sets the orientation of a GraphObject that is in a Link.*/
        segmentOrientation: EnumValue;
        /**Gets or sets the stretch of the GraphObject.*/
        stretch: EnumValue;
        /**Gets or sets how the direction of the last segment of a link going to this port is computed when the node is rotated.*/
        toEndSegmentDirection: EnumValue;
        /**Gets or sets the length of the last segment of a link going to this port.*/
        toEndSegmentLength: number;
        /**Gets or sets whether the user may draw Links to this port.*/
        toLinkable: any;
        /**Gets or sets whether the user may draw duplicate Links to this port.*/
        toLinkableDuplicates: boolean;
        /**Gets or sets whether the user may draw Links that connect to this port's Node.*/
        toLinkableSelfNode: boolean;
        /**Gets or sets the maximum number of links that may go into this port.*/
        toMaxLinks: number;
        /**This Adornment is shown when the mouse hovers over this object.*/
        toolTip: Adornment;
        /**Gets or sets how far the end segment of a link going to this port stops short of the actual port.*/
        toShortLength: number;
        /**Gets or sets where a link should connect to this port.*/
        toSpot: Spot;
        /**Gets or sets whether a GraphObject is visible.*/
        visible: boolean;
        /**Gets or sets the desired width of this GraphObject in local coordinates.*/
        width: number;
        /**Add a data-binding of a property on this GraphObject to a property on a data object.
        * @param {Binding} binding*/
        bind(binding: Binding);
        /**Creates a deep copy of this GraphObject and returns it.*/
        copy(): GraphObject;
        /**Returns the effective angle that the object is drawn at, in document coordinates.*/
        getDocumentAngle(): number;
        /**Returns the Point in document coordinates for a given Spot in this object's bounds.
        * @param {Spot} s a real Spot describing a location relative to the GraphObject.
        * @param {Point=} result an optional Point that is modified and returned.*/
        getDocumentPoint(s: Spot, result?: Point): Point;
        /**Returns the total scale that the object is drawn at, in document coordinates.*/
        getDocumentScale(): number;
        /**Given a Point in document coordinates, returns a new Point in local coordinates.
        * @param {Point} p a Point in document coordinates.
        * @param {Point=} result an optional Point that is modified and returned.*/
        getLocalPoint(p: Point, result?: Point): Point;
        /**This predicate is true if this object is an element, perhaps indirectly, of the given panel.
        * @param {GraphObject} panel
        * or if it is contained by another panel that is contained by the given panel,
        * to any depth; false if the argument is null or is not a Panel.*/
        isContainedBy(panel: Panel): boolean;
        /**This predicate is true if this object is #visible and each of its visual containing panels are also visible.*/
        isVisibleObject(): boolean;
        /**This static function builds an object given its class and additional arguments providing initial properties or GraphObjects that become Panel elements.
        * @param {function()|string} type a class function or the name of a class in the "go" namespace,
        * or one of several predefined kinds of Panels: "Button", "TreeExpanderButton",
        * "SubGraphExpanderButton", or "ContextMenuButton".
        * @param {...*} initializers zero or more values that initialize the new object,
        * typically an Object with properties whose values that get set on the new object,
        * or a GraphObject that is added to a Panel,
        * or a Binding for one of the new object's properties,
        * or an EnumValue as the initial value of a single property of the new object that
        * is recognized to take that value,
        * or a string that is used as the value of a commonly set property.*/
        static make(type: any, ...initializers: any[]): any;
        /**GraphObjects with this as the value of GraphObject#stretch are stretched depending on the context they are used.*/
        static Default: EnumValue;
        /**GraphObjects with this as the value of GraphObject#stretch are scaled in both directions so as to fit exactly in the given bounds; there is no clipping but the aspect ratio may change, causing the object to appear stretched.*/
        static Fill: EnumValue;
        /**GraphObjects with this as the value of GraphObject#stretch are scaled as much as possible in the x-axis*/
        static Horizontal: EnumValue;
        /**GraphObjects with this as the value of GraphObject#stretch are not automatically scaled to fit in the given bounds; there may be clipping in one or both directions.*/
        static None: EnumValue;
        /**Pictures with this as the value of Picture#imageStretch are drawn with equal scale in both directions to fit the arranged (actual) bounds.*/
        static Uniform: EnumValue;
        /**Pictures with this as the value of Picture#imageStretch are drawn with equal scale in both directions to fit the larger side of the image bounds.*/
        static UniformToFill: EnumValue;
        /**GraphObjects with this as the value of GraphObject#stretch are scaled as much as possible in the y-axis*/
        static Vertical: EnumValue;
    }
    /**
    * This simple layout places all of the Parts in a grid-like arrangement, ordered, spaced apart,
    * and wrapping as needed.  It ignores any Links connecting the Nodes being laid out.
    */
    class Group extends Node {
        /**Constructs an empty Group with no visual elements and no member parts; normally a Group will have some visual elements surrounding a Placeholder.
        * @param {EnumValue=} type if not supplied, the default Panel type is {@link Panel#Position}.
        */
        constructor(type?: EnumValue);
        /**Gets or sets whether the size of the area of the Group's #placeholder should remain the same during a DraggingTool move until a drop occurs.*/
        computesBoundsAfterDrag: boolean;
        /**Gets or sets whether the subgraph contained by this group is expanded.*/
        isSubGraphExpanded: boolean;
        /**Gets or sets the Layout used to position all of the immediate member nodes and links in this group.*/
        layout: Layout;
        /**Gets or sets the function that is called after a member Part has been added to this Group.*/
        memberAdded: (a:Group, b:Part)=>any;
        /**Gets an iterator over the member Parts of this Group.*/
        memberParts: Iterator;
        /**Gets or sets the function that is called after a member Part has been removed from this Group.*/
        memberRemoved: (a: Group, b: Part) => any;
        /**Gets or sets the predicate that determines whether or not a Part may become a member of this group.*/
        memberValidation: (a: Group, b: Part) => boolean;
        /**Gets a Placeholder that this group may contain in its visual tree.*/
        placeholder: Placeholder;
        /**Gets or sets the function that is called when #isSubGraphExpanded has changed value.*/
        subGraphExpandedChanged: (a: Group) => any;
        /**Gets or sets whether the user may ungroup this group.*/
        ungroupable: boolean;
        /**Gets or sets whether the subgraph starting at this group had been collapsed by a call to #expandSubGraph on the containing Group.*/
        wasSubGraphExpanded: boolean;
        /**Add the Parts in the given collection as members of this Group for those Parts for which CommandHandler#isValidMember returns true.
        * @param {Iterable} coll
        * @param {boolean=} check whether to call CommandHandler#isValidMember to confirm that it is valid to add the Part to be a member of this Group.
        */
        addMembers(coll: Iterable, check?: boolean): boolean;
        /**See if the given collection of Parts contains non-Links all for which CommandHandler#isValidMember returns true.
        * @param {Iterable} coll*/
        canAddMembers(coll: Iterable): boolean;
        /**This predicate returns true if #ungroupable is true, if the layer's Layer#allowUngroup is true, and if the diagram's Diagram#allowUngroup is true.*/
        canUngroup(): boolean;
        /**Hide each of the member nodes and links of this group, and recursively collapse any member groups.*/
        collapseSubGraph();
        /**Show each member node and link, and perhaps recursively expand nested subgraphs.*/
        expandSubGraph();
        /**Return a collection of Parts that are all of the nodes and links that are members of this group, including inside nested groups, but excluding this group itself.*/
        findSubGraphParts(): Set;
        /**Move this Group and all of its member parts, recursively.
        * @param {Point} newpos a new Point in document coordinates.*/
        move(newpos: Point);
    }
    /**
    * An InputEvent represents a mouse or keyboard event.
    * The principal properties hold information about a particular input event.
    * These properties include the #documentPoint at which a mouse event
    * occurred in document coordinates,
    * the corresponding point in view/element coordinates, #viewPoint,
    * the #key for keyboard events,
    * and the #modifiers and #button at the time.
    * Additional descriptive properties include #clickCount, #delta,
    * #timestamp, and the source event #event (if available).
    */
    class InputEvent {
        /**The InputEvent class constructor produces an empty InputEvent.*/
        constructor();
        /**Gets whether the alt key is being held down.*/
        alt: boolean;
        /**Gets or sets whether the underlying #event is prevented from bubbling up the hierarchy of HTML elements outside of the Diagram and whether any default action is canceled.*/
        bubbles: boolean;
        /**Gets or sets the button that caused this event.*/
        button: number;
        /**Gets or sets whether this event represents a click or a double-click.*/
        clickCount: number;
        /**Gets whether the control key is being held down.*/
        control: boolean;
        /**Gets or sets the amount of change associated with a mouse-wheel rotation.*/
        delta: number;
        /**Gets the source diagram associated with the event.*/
        diagram: Diagram;
        /**Gets or sets the point at which this input event occurred, in document coordinates.*/
        documentPoint: Point;
        /**Gets or sets whether the InputEvent represents a mouse-down or a key-down event.*/
        down: boolean;
        /**Gets or sets the platform's user-agent-supplied event for this event.*/
        event: Event;
        /**Gets or sets whether an InputEvent that applies to a GraphObject and bubbles up the chain of containing Panels is stopped from continuing up the chain.*/
        handled: boolean;
        /**Gets or sets the key pressed or released as this event.*/
        key: string;
        /**Gets whether the logical left mouse button is being held down.*/
        left: boolean;
        /**Gets whether the meta key is being held down.*/
        meta: boolean;
        /**Gets whether the logical middle mouse button is being held down.*/
        middle: boolean;
        /**Gets or sets the modifier keys that were used with the mouse or keyboard event.*/
        modifiers: number;
        /**Gets whether the logical right mouse button is being held down.*/
        right: boolean;
        /**Gets whether the shift key is being held down.*/
        shift: boolean;
        /**Gets or sets the diagram associated with the canvas that the event is currently targeting.*/
        targetDiagram: Diagram;
        /**Gets or sets the GraphObject that is at the current mouse point, if any.*/
        targetObject: GraphObject;
        /**Gets or sets the time at which the event occurred, in milliseconds.*/
        timestamp: number;
        /**Gets or sets whether the InputEvent represents a mouse-up or a key-up event.*/
        up: boolean;
        /**Gets or sets the point at which this input event occurred.*/
        viewPoint: Point;
        /**Make a copy of this InputEvent.*/
        copy(): InputEvent;
    }
    /**
    * Layers are how named collections of Part}s are drawn in front or behind other collections of Parts in a Diagram}.
    * Layers can only contain Part}s -- they cannot hold GraphObject}s directly.
    */
    class Layer {
        /**This constructs an empty Layer; you should set the #name before adding the Layer to a Diagram.*/
        constructor();
        /**Gets or sets whether the user may copy objects in this layer.*/
        allowCopy: boolean;
        /**Gets or sets whether the user may delete objects in this layer.*/
        allowDelete: boolean;
        /**Gets or sets whether the user may group parts together in this layer.*/
        allowGroup: boolean;
        /**Gets or sets whether the user may draw new links in this layer.*/
        allowLink: boolean;
        /**Gets or sets whether the user may move objects in this layer.*/
        allowMove: boolean;
        /**Gets or sets whether the user may reconnect existing links in this layer.*/
        allowRelink: boolean;
        /**Gets or sets whether the user may reshape parts in this layer.*/
        allowReshape: boolean;
        /**Gets or sets whether the user may resize parts in this layer.*/
        allowResize: boolean;
        /**Gets or sets whether the user may rotate parts in this layer.*/
        allowRotate: boolean;
        /**Gets or sets whether the user may select objects in this layer.*/
        allowSelect: boolean;
        /**Gets or sets whether the user may do in-place text editing in this layer.*/
        allowTextEdit: boolean;
        /**Gets or sets whether the user may ungroup existing groups in this layer.*/
        allowUngroup: boolean;
        /**Gets the Diagram that is using this Layer.*/
        diagram: Diagram;
        /**Gets or sets whether the objects in this layer are considered temporary.*/
        isTemporary: boolean;
        /**Gets or sets the name for this layer.*/
        name: string;
        /**Gets or sets the opacity for all parts in this layer.*/
        opacity: number;
        /**Gets an iterator for this Layer's Parts.*/
        parts: Iterator;
        /**Gets a backwards iterator for this Layer's Parts, for iterating over the parts in reverse order.*/
        partsBackwards: Iterator;
        /**Gets or sets whether methods such as #findObjectAt find any of the objects in this layer.*/
        pickable: boolean;
        /**Gets or sets whether the user may view any of the objects in this layer.*/
        visible: boolean;
        /**Find the front-most GraphObject in this layer at the given point in document coordinates.
        * @param {Point} p A Point in document coordinates.
        * @param {function(GraphObject):GraphObject | null=} navig A function taking a GraphObject and
        * returning a GraphObject, defaulting to the identity.
        * @param {function(GraphObject):boolean | null=} pred A function taking the GraphObject
        * returned by navig and returning true if that object should be returned,
        * defaulting to a predicate that always returns true.*/
        findObjectAt(p: Point, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject)=>boolean): GraphObject;
        /**Return a collection of the GraphObjects of this layer at the given point in document coordinates.
        * @param {Point} p A Point in document coordinates.
        * @param {function(GraphObject):GraphObject | null=} navig A function taking a GraphObject and
        * returning a GraphObject, defaulting to the identity.
        * If this function returns null, the given GraphObject will not be included in the results.
        * @param {function(GraphObject):boolean | null=} pred A function taking the GraphObject
        * returned by navig and returning true if that object should be returned,
        * defaulting to a predicate that always returns true.
        * @param {List|Set=} coll An optional collection (List or Set) to add the results to.*/
        findObjectsAt(p: Point, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, coll?: List): Iterable;
        findObjectsAt(p: Point, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, coll?: Set): Iterable;
        /**Returns a collection of all GraphObjects that are inside or that intersect a given Rect in document coordinates.
        * @param {Rect} r A Rect in document coordinates.
        * @param {function(GraphObject):GraphObject | null=} navig A function taking a GraphObject and
        * returning a GraphObject, defaulting to the identity.
        * If this function returns null, the given GraphObject will not be included in the results.
        * @param {function(GraphObject):boolean | null=} pred A function taking the GraphObject
        * returned by navig and returning true if that object should be returned,
        * defaulting to a predicate that always returns true.
        * @param {*=} partialInclusion Whether an object can match if it merely intersects the rectangular area (true) or
        * if it must be entirely inside the rectangular area (false).  The default value is false.
        * @param {List|Set=} coll An optional collection (List or Set) to add the results to.*/
        findObjectsIn(r: Rect, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: any, coll?: List): Iterable;
        findObjectsIn(r: Rect, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, partialInclusion?: any, coll?: Set): Iterable;
        /**Returns a collection of all GraphObjects that are within a certain distance of a given point in document coordinates.
        * @param {Point} p A Point in document coordinates.
        * @param {number} dist The distance from the point.
        * @param {function(GraphObject):GraphObject | null=} navig A function taking a GraphObject and
        * returning a GraphObject, defaulting to the identity.
        * If this function returns null, the given GraphObject will not be included in the results.
        * @param {function(GraphObject):boolean | null=} pred A function taking the GraphObject
        * returned by navig and returning true if that object should be returned,
        * defaulting to a predicate that always returns true.
        * @param {*=} partialInclusion Whether an object can match if it merely intersects the circular area (true) or
        * if it must be entirely inside the circular area (false).  The default value is true.
        * @param {List|Set=} coll An optional collection (List or Set) to add the results to.*/
        findObjectsNear(p: Point, dist: number, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, coll?: List): Iterable;
        findObjectsNear(p: Point, dist: number, navig?: (obj: GraphObject) => GraphObject, pred?: (obj: GraphObject) => boolean, coll?: Set): Iterable;
    }
    /**
    * A Link is a Part that connects Nodes.
    * The link relationship is directional, going from Link#fromNode to Link#toNode.
    * A link can connect to a specific port element in a node, as named by the Link#fromPortId
    * and Link#toPortId properties.
    */
    class Link extends Part {
        /**Constructs an empty link that does not connect any nodes.*/
        constructor();
        /**Gets or sets how the route is computed, including whether it uses the points of its old route to determine the new route.*/
        adjusting: EnumValue;
        /**Gets or sets how rounded the corners are for adjacent line segments when the #curve is #None #JumpGap, or #JumpOver and the two line segments are orthogonal to each other.*/
        corner: number;
        /**Gets or sets the way the path is generated from the route's points.*/
        curve: EnumValue;
        /**Gets or sets how far the control points are offset when the #curve is #Bezier or when there are multiple links between the same two ports.*/
        curviness: number;
        /**Gets or sets how the direction of the last segment is computed when the node is rotated.*/
        fromEndSegmentDirection: EnumValue;
        /**Gets or sets the length of the last segment.*/
        fromEndSegmentLength: number;
        /**Gets or sets the Node that this link comes from.*/
        fromNode: Node;
        /**Gets a GraphObject that is the "from" port that this link is connected from.*/
        fromPort: GraphObject;
        /**Gets or sets the function that is called after this Link changes which Node or port it connects from.*/
        fromPortChanged: (a:Link, b:GraphObject, c:GraphObject)=>any ;
        /**Gets or sets the identifier of the port that this link comes from.*/
        fromPortId: string;
        /**Gets or sets how far the end segment stops short of the actual port.*/
        fromShortLength: number;
        /**Gets or sets where this link should connect at the #fromPort.*/
        fromSpot: Spot;
        /**Gets the Geometry that is used by the #path, the link Shape based on the route points.*/
        geometry: Geometry;
        /**This read-only property is true when this Link has any label Nodes, Nodes that are owned by this Link and are arranged along its path.*/
        isLabeledLink: boolean;
        /**Gets or sets whether this Link is part of the tree for tree operations such as Node#findTreeChildrenNodes or Node#collapseTree.*/
        isTreeLink: boolean;
        /**This read-only property true if #routing is a value that implies that the points of the route should be orthogonal, such that each point shares a common X or a common Y value with the immediately previous and next points.*/
        isOrthogonal: boolean;
        /**Gets an iterator over the Nodes that act as labels on this Link.*/
        labelNodes: Iterator;
        /**Gets the angle of the path at the #midPoint.*/
        midAngle: number;
        /**Gets the point at the middle of the path.*/
        midPoint: Point;
        /**Gets the Shape representing the path of this Link.*/
        path: Shape;
        /**Gets or sets the List of Points in the route.*/
        points: List;
        /**Gets the number of points in the route.*/
        pointsCount: number;
        /**Gets or sets whether the user may reconnect an existing link at the "from" end.*/
        relinkableFrom: boolean;
        /**Gets or sets whether the user may reconnect an existing link at the "to" end.*/
        relinkableTo: boolean;
        /**Gets or sets whether the user may change the number of segments in this Link, if the link has straight segments.*/
        resegmentable: boolean;
        /**Gets or sets whether the link's path tries to avoid other nodes.*/
        routing: EnumValue;
        /**Gets or sets how far the control points are from the points of the route when #routing is #Orthogonal and #curve is #Bezier.*/
        smoothness: number;
        /**Gets or sets how far the control points are from the points of the route when #routing is #Orthogonal and #curve is #Bezier.*/
        toEndSegmentDirection: EnumValue;
        /**Gets or sets the length of the last segment.*/
        toEndSegmentLength: number;
        /**Gets or sets the Node that this link goes to.*/
        toNode: Node;
        /**Gets a GraphObject that is the "to" port that this link is connected to.*/
        toPort: GraphObject;
        /**Gets or sets the function that is called after this Link changes which Node or port it connects to.*/
        toPortChanged: (a: Link, b: GraphObject, c: GraphObject) => any ;
        /**Gets or sets the identifier of the port that this link goes to.*/
        toPortId: string;
        /**Gets or sets how far the end segment stops short of the actual port.*/
        toShortLength: number;
        /**Gets or sets where this link should connect at the #toPort.*/
        toSpot: Spot;
        /**This predicate returns true if #relinkableFrom is true, if the layer's Layer#allowRelink is true, and if the diagram's Diagram#allowRelink is true.*/
        canRelinkFrom(): boolean;
        /**This predicate returns true if #relinkableTo is true, if the layer's Layer#allowRelink is true, and if the diagram's Diagram#allowRelink is true.*/
        canRelinkTo(): boolean;
        /**Find the index of the segment that is closest to a given point.
        * @param {Point} p the Point, in document coordinates.
        */
        findClosestSegment(p: Point): number;
        /**Compute the direction in which a link should go from a given connection point.
        * @param {Node} node
        * @param {GraphObject} port the GraphObject representing a port on the node.
        * @param {Point} linkpoint the connection point, in document coordinates.
        * @param {Spot} spot a Spot value describing where the link should connect.
        * @param {boolean} from true if the link is coming out of the port; false if going to the port.
        * @param {boolean} ortho whether the link should have orthogonal segments.
        * @param {Node} othernode the node at the other end of the link.
        * @param {GraphObject} otherport the GraphObject port at the other end of the link.*/
        getLinkDirection(node: Node, port: GraphObject, linkpoint: Point, spot: Spot, from: boolean, ortho: boolean, othernode: Node, otherport: GraphObject): number; 
        /**Compute the point on a node/port at which the route of a link should end.
        * @param {Node} node
        * @param {GraphObject} port the GraphObject representing a port on the node.
        * @param {Spot} spot a Spot value describing where the link should connect.
        * @param {boolean} from true if the link is coming out of the port; false if going to the port.
        * @param {boolean} ortho whether the link should have orthogonal segments.
        * @param {Node} othernode the node at the other end of the link.
        * @param {GraphObject} otherport the GraphObject port at the other end of the link.
        * @param {Point=} result an optional Point that is modified and returned; otherwise it allocates and returns a new Point
        */
        getLinkPoint(node: Node, port: GraphObject, spot: Spot, from: boolean, ortho: boolean, othernode: Node, otherport: GraphObject, result?: Point)
        /**Compute the intersection point for the edge of a particular port GraphObject, given a point, when no particular spot or side has been specified.
        * @param {Node} node
        * @param {GraphObject} port the GraphObject representing a port on the node.
        * @param {Point} focus the point in document coordinates to/from which the link should point,
        *   normally the center of the port.
        * @param {Point} p often this point is far away from the node, to give a general direction,
        *   particularly an orthogonal one.
        * @param {boolean} from true if the link is coming out of the port; false if going to the port.
        * @param {Point=} result an optional Point that is modified and returned; otherwise it allocates and returns a new Point
        */
        getLinkPointFromPoint(node: Node, port: GraphObject, focus: Point, p: Point, from: boolean, result?: Point): Point;
        /**Given a Node, return the node at the other end of this link.
        * @param {Node} node
        */
        getOtherNode(node: Node): Node;
        /**Given a GraphObject that is a "port", return the port at the other end of this link.
        * @param {GraphObject} port
        */
        getOtherPort(port: GraphObject): GraphObject;
        /**Gets a particular point of the route.
        * @param {number} i  The zero-based index of the desired point.*/
        getPoint(i: number): Point;
        /**Move this link to a new position.
        * @param {number} dx
        * @param {number} dy*/
        move(newpos: Point);
        /**Used as a value for Link#routing: each segment is horizontal or vertical, but the route tries to avoid crossing over nodes.*/
        static AvoidsNodes: EnumValue;
        /**Used as a value for Link#curve, to indicate that the link path uses Bezier curve segments.*/
        static Bezier: EnumValue;
        /**Used as a value for Link#adjusting, to indicate that the link route computation should keep the intermediate points of the previous route, just modifying the first and/or last points; if the routing is orthogonal, it will only modify the first two and/or last two points.*/
        static End: EnumValue;
        /**Used as a value for Link#curve, to indicate that orthogonal link segments will be discontinuous where they cross over other orthogonal link segments that have a Link#curve or JumpOver or JumpGap.*/
        static JumpGap: EnumValue;
        /**Used as a value for Link#curve, to indicate that orthogonal link segments will veer around where they cross over other orthogonal link segments that have a Link#curve or JumpOver or JumpGap.*/
        static JumpOver: EnumValue;
        /**This is the default value for Link#curve and Link#adjusting, to indicate that the path geometry consists of straight line segments and to indicate that the link route computation does not depend on any previous route points; this can also be used as a value for GraphObject#segmentOrientation to indicate that the object is never rotated along the link route -- its angle is unchanged.*/
        static None: EnumValue;
        /**Used as the default value for Link#routing: the route goes fairly straight between ports.*/
        static Normal: EnumValue;
        /**This value for GraphObject#segmentOrientation results in the GraphObject turned to have the same angle as the route: the GraphObject's angle is always the same as the angle of the link's route at the segment where the GraphObject is attached; use this orientation for arrow heads.*/
        static OrientAlong: EnumValue;
        /**This value for GraphObject#segmentOrientation results in the GraphObject being turned counter-clockwise to be perpendicular to the route: the GraphObject's angle is always 90 degrees less than the angle of the link's route at the segment where the GraphObject is attached.*/
        static OrientMinus90: EnumValue;
        /**This value for GraphObject#segmentOrientation results in the GraphObject turned counter-clockwise to be perpendicular to the route, just like Link#OrientMinus90, but is never upside down: the GraphObject's angle always being 90 degrees less than the angle of the link's route at the segment where the GraphObject is attached; this is typically only used for TextBlocks or Panels that contain text.*/
        static OrientMinus90Upright: EnumValue;
        /**This value for GraphObject#segmentOrientation results in the GraphObject's angle always being 180 degrees opposite from the angle of the link's route at the segment where the GraphObject is attached.*/
        static OrientOpposite: EnumValue;
        /**This value for GraphObject#segmentOrientation results in the GraphObject is turned clockwise to be perpendicular to the route: the GraphObject's angle is always 90 degrees more than the angle of the link's route at the segment where the GraphObject is attached.*/
        static OrientPlus90: EnumValue;
        /**This value for GraphObject#segmentOrientation results in the GraphObject turned clockwise to be perpendicular to the route, just like Link#OrientPlus90, but is never upside down: the GraphObject's angle always being 90 degrees more than the angle of the link's route at the segment where the GraphObject is attached; this is typically only used for TextBlocks or Panels that contain text.*/
        static OrientPlus90Upright: EnumValue;
        /**This value for GraphObject#segmentOrientation results in the GraphObject turned to have the same angle as the route, just like Link#OrientAlong, but is never upside down: the GraphObject's angle always following the angle of the link's route at the segment where the GraphObject is attached; this is typically only used for TextBlocks or Panels that contain text.*/
        static OrientUpright: EnumValue;
        /**This value for GraphObject#segmentOrientation results in the GraphObject's angle always following the angle of the link's route at the segment where the GraphObject is attached, but never upside down and never angled more than +/- 45 degrees: when the route's angle is within 45 degrees of vertical (90 or 270 degrees), the GraphObject's angle is set to zero; this is typically only used for TextBlocks or Panels that contain text.*/
        static OrientUpright45: EnumValue;
        /**Used as a value for Link#routing: each segment is horizontal or vertical.*/
        static Orthogonal: EnumValue;
        /**Used as a value for Link#adjusting, to indicate that the link route computation should scale and rotate the intermediate points so that the link's shape looks approximately the same; if the routing is orthogonal, this value is treated as if it were Link#End.*/
        static Scale: EnumValue;
        /**Used as a value for Link#adjusting, to indicate that the link route computation should linearly interpolate the intermediate points so that the link's shape looks stretched; if the routing is orthogonal, this value is treated as if it were Link#End.*/
        static Stretch: EnumValue;
    }
    /**
    * A Node is a Part that may connect to other nodes with Links,
    * or that may be a member of a Group.
    * Group inherits from Node,
    * enabling nodes to logically contain other nodes and links.
    */
    class Node extends Part {
        /**Constructs an empty Node. 
        * @param {EnumValue=} type if not supplied, the default Panel type is Panel#Position.
        */
        constructor(type?: EnumValue);
        /**Gets or sets whether this Node is to be avoided by Links whose Link#routing is Link#AvoidsNodes.*/
        avoidable: boolean;
        /**Gets or sets the margin around this Node in which avoidable links will not be routed.*/
        avoidableMargin: Margin;
        /**Gets whether a Node is a label node for a Link.*/
        isLinkLabel: boolean;
        /**Gets or sets whether the subtree graph starting at this node is expanded.*/
        isTreeExpanded: boolean;
        /**Gets whether this node has no tree children.*/
        isTreeLeaf: boolean;
        /**Gets or sets the Link for which this Node is acting as a smart label.*/
        labeledLink: Link;
        /**Gets or sets the function that is called after a Link has been connected with this Node.*/
        linkConnected: (a:Node, b:Link, c:GraphObject)=>any;
        /**Gets or sets the function that is called after a Link has been disconnected from this Node.*/
        linkDisconnected: (a: Node, b: Link, c: GraphObject) => any;
        /**Gets an iterator over all of the Links that are connected with this node.*/
        linksConnected: Iterator;
        /**Get the primary GraphObject representing a port in this node.*/
        port: GraphObject;
        /**Gets an iterator over all of the GraphObjects in this node that act as ports.*/
        ports: Iterator;
        /**Gets or sets the function that is called when #isTreeExpanded has changed value.*/
        treeExpandedChanged: (node:Node)=>any;
        /**Gets or sets whether the subtree graph starting at this node had been collapsed by a call to #expandTree on the parent node.*/
        wasTreeExpanded: boolean;
        /**Hide each child node and the connecting link, and recursively collapse each child node.
        * @param {number=} level How many levels of the tree, starting at this node, to keep expanded if already expanded;
        *    the default is 1, hiding all tree children of this node.  Values less than 1 are treated as 1.
        */
        collapseTree(level?: number);
        /**Show each child node and the connecting link, and perhaps recursively expand their child nodes.
        * @param {number=} level How many levels of the tree should be expanded;
        *    the default is 2, showing all tree children of this node and potentially more.
        *    Values less than 2 are treated as 2.*/
        expandTree(level?: number);
        /**Returns an iterator over all of the Links that go from this node to another node or vice-versa, perhaps limited to a given port id on this node and a port id on the other node.
        * @param {Node} othernode
        * @param {string|null=} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
        * @param {string|null=} otherpid A port identifier string; if null the link's portId is ignored and all links are included in the search.
        */
        findLinksBetween(othernode: Node, pid?: string, otherpid?: string): Iterator;
        /**Returns an iterator over all of the Links that connect with this node in either direction, perhaps limited to the given port id on this node.
        * @param {string|null=} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
        */
        findLinksConnected(pid?: string): Iterator;
        /**Returns an iterator over all of the Links that go into this node, perhaps limited to the given port id on this node.
        * @param {string|null=} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
        */
        findLinksInto(pid?: string): Iterator;
        /**Returns an iterator over all of the Links that come out of this node, perhaps limited to the given port id on this node.
        * @param {string|null=} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
        */
        findLinksOutOf(pid?: string): Iterator;
        /**Returns an iterator over all of the Links that go from this node to another node, perhaps limited to a given port id on this node and a port id on the other node.
        * @param {Node} othernode
        * @param {string|null=} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
        * @param {string|null=} otherpid A port identifier string; if null the link's portId is ignored and all links are included in the search.
        */
        findLinksTo(othernode: Node, pid?: string, otherpid?: string): Iterator;
        /**Returns an iterator over the Nodes that are connected with this node in either direction, perhaps limited to the given port id on this node.
        * @param {string|null=} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
        */
        findNodesConnected(pid?: string): Iterator;
        /**Returns an iterator over the Nodes that are connected with this node by links going into this node, perhaps limited to the given port id on this node.
        * @param {string|null=} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
        */
        findNodesInto(pid?: string): Iterator;
        /**Returns an iterator over the Nodes that are connected with this node by links coming out of this node, perhaps limited to the given port id on this node.
        * @param {string|null=} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
        */
        findNodesOutOf(pid?: string): Iterator;
        /**Find a GraphObject with a given GraphObject#portId.
        * @param {string} pid*/
        findPort(pid: string): GraphObject;
        /**Returns an Iterator for the collection of Links that connect with the immediate tree children of this node.*/
        findTreeChildrenLinks(): Iterator;
        /**Returns an Iterator for the collection of Nodes that are the immediate tree children of this node.*/
        findTreeChildrenNodes(): Iterator;
        /**Returns the Link that connects with the tree parent Node of this node if the graph is tree-structured, if there is such a link and Link#isTreeLink is true.*/
        findTreeParentLink(): Link;
        /**Returns the Node that is the tree parent of this node if the graph is tree-structured, if there is a parent.*/
        findTreeParentNode(): Node;
        /**Return a collection of Parts including this Node, all of the Links going to child Nodes, and all of their tree child nodes and links.
        * @param {number=} level How many levels of the tree, starting at this node, to include;
        *    the default is Infinity, including all tree children of this node.  Values less than 1 are treated as 1.
        */
        findTreeParts(level?: number): Set;
        /**Return the Node that is at the root of the tree that this node is in, perhaps this node itself.*/
        findTreeRoot(): Node;
        /**This predicate is true if this node is a child of the given Node, perhaps indirectly as a descendant.
        * @param {Node} node the Node that might be a parent or ancestor of this node.*/
        isInTreeOf(node: Node): boolean;
        /**This value for GraphObject#fromEndSegmentDirection and GraphObject#toEndSegmentDirection indicates that the link's end segment angle stays the same even if the node is rotated.*/
        static DirectionAbsolute: EnumValue;
        /**This value for Link#fromEndSegmentDirection and Link#toEndSegmentDirection indicates that the real value is inherited from the corresponding connected port.*/
        static DirectionDefault: EnumValue;
        /**This value for GraphObject#fromEndSegmentDirection and GraphObject#toEndSegmentDirection indicates that the link's end segment angle is rotated to match the node's angle.*/
        static DirectionRotatedNode: EnumValue;
        /**This value for GraphObject#fromEndSegmentDirection and GraphObject#toEndSegmentDirection indicates that the link's end segment angle is rotated to match the node's angle, but only in increments of 90 degrees.*/
        static DirectionRotatedNodeOrthogonal: EnumValue;
    }
    /**
    * An Overview is a Diagram that displays all of a different diagram,
    * with a rectangular box showing the viewport displayed by that other diagram.
    * All you need to do is set Overview#observed.
    */
    class Overview extends Diagram {
        /* @param {Element|string } div A reference to a div or its ID as a string.*/
        constructor(div: string);
        constructor(div?: Element);
        /**Gets pr sets the rectangular Part that represents the viewport of the #observed Diagram.*/
        box: Part;
        /**Gets or sets the Diagram for which this Overview is displaying a model and showing its viewport into that model.*/
        observed: Diagram;
    }
    /**
    * Palette extends the Diagram class to allow objects to be dragged and placed onto other Diagrams.
    * Its Diagram#layout is a GridLayout.
    * The Palette is Diagram#isReadOnly but to support drag-and-drop its Diagram#allowDragOut is true.
    */
    class Palette extends Diagram {
         /* @param {HTMLDivElement|string } div A reference to a div or its ID as a string.*/
        constructor(...args: any[]);
    }
    /**
    * A Panel is a GraphObject that holds other GraphObjects as its elements.
    * A Panel is responsible for sizing and positioning its elements.
    * Every Panel has a #type and establishes its own coordinate system. The #type of a Panel
    * determines how it will size and arrange its elements.
    */
    class Panel extends GraphObject {
        /**Constructs an empty Panel of the given #type.
        * @param {EnumValue=} type If not supplied, the default Panel type is Panel#Position.
        */
        constructor(type?: EnumValue);
        /**Gets the number of columns in this Panel if it is of #type Panel#Table.*/
        columnCount: number;
        /**Gets or sets how this Panel's columns deal with extra space if the Panel is of #type Panel#Table.*/
        columnSizing: EnumValue;
        /**Gets or sets the optional model data to which this panel is data-bound.*/
        data: Object;
        /**Gets or sets the default alignment spot of this Panel, used as the alignment for an element when its GraphObject#alignment value is Spot#Default.*/
        defaultAlignment: Spot;
        /**Gets or sets the default dash array for a particular column's separator.*/
        defaultColumnSeparatorDashArray: Array;
        /**Gets or sets the default stroke (color) for columns in a Table Panel provided a given column has a nonzero RowColumnDefinition#separatorStrokeWidth.*/
        defaultColumnSeparatorStroke: any;
        /**Gets or sets the default stroke width for a particular column's separator.*/
        defaultColumnSeparatorStrokeWidth: number;
        /**Gets or sets the default dash array for a particular row's separator.*/
        defaultRowSeparatorDashArray: Array;
        /**Gets or sets the default stroke (color) for rows in a Table Panel provided a given row has a nonzero RowColumnDefinition#separatorStrokeWidth.*/
        defaultRowSeparatorStroke: any;
        /**Gets or sets the default stroke width for a particular row's separator.*/
        defaultRowSeparatorStrokeWidth: any;
        /**Gets or sets the additional padding for a particular row or column.*/
        defaultSeparatorPadding: Margin;
        /**Gets or sets the default stretch of this Panel, used as the stretch for an element when its GraphObject#stretch value is GraphObject#Default.*/
        defaultStretch: EnumValue;
        /**Gets an iterator over the collection of the GraphObjects that this panel manages.*/
        elements: Iterator;
        /**Gets or sets the distance between lines in a #Grid panel.*/
        gridCellSize: Size;
        /**Gets or sets an origin point for the grid cells in a #Grid panel.*/
        gridOrigin: Point;
        /**Gets or sets a JavaScript Array of values or objects, each of which will be represented by a Panel as elements in this Panel.*/
        itemArray: Array;
        /**Gets or sets the name of the item data property that returns a string describing that data's category, or a function that takes an item data object and returns that string; the default value is the name 'category'.*/
        itemCategoryProperty: any;
        /**Gets or sets the default Panel template used as the archetype for item data that are in #itemArray.*/
        itemTemplate: Panel;
        /**Gets or sets a Map mapping template names to Panels.*/
        itemTemplateMap: Map;
        /**Gets or sets the first column that this Panel of #type Panel#Table displays.*/
        leftIndex: number;
        /**Gets or sets the multiplicative opacity for this Panel and all children.*/
        opacity: number;
        /**Gets or sets the space between this Panel's border and its content, depending on the type of panel.*/
        padding: any;
        /**Gets the number of row in this Panel if it is of #type Panel#Table.*/
        rowCount: number;
        /**Gets or sets how this Panel's rows deal with extra space if the Panel is of #type Panel#Table.*/
        rowSizing: EnumValue;
        /**Gets or sets the first row that this this Panel of #type Panel#Table displays.*/
        topIndex: number;
        /**Gets or sets the type of the Panel.*/
        type: EnumValue;
        /**Gets or sets how a #Viewbox panel will resize its content.*/
        viewboxStretch: EnumValue;
        /**Adds a GraphObject to the end of this Panel's list of elements, visually in front of all of the other elements.
        * @param {GraphObject} element A GraphObject.*/
        add(element: GraphObject);
        /**Creates a deep copy of this Panel and returns it.*/
        copy(): Panel;
        /**Returns the GraphObject in this Panel's list of elements at the specified index.*/
        elt(idx: number);
        /**Returns the cell at a given x-coordinate in local coordinates.
        * @param {number} x*/
        findColumnForLocalX(x: number); 
        /**Search the visual tree starting at this Panel for a GraphObject whose GraphObject#name is the given name.
        * @param {string} name The name to search for, using a case-sensitive string comparison.*/
        findObject(name: string): GraphObject;
        /**Returns the row at a given y-coordinate in local coordinates.
        * @param {number} y*/
        findRowForLocalY(y: number); 
        /**Gets the RowColumnDefinition for a particular column in this Table Panel.
        * @param {number} idx the non-negative zero-based integer column index.*/
        getColumnDefinition(idx: number): RowColumnDefinition;
        /**Gets the RowColumnDefinition for a particular row in this Table Panel.
        * @param {number} idx the non-negative zero-based integer row index.*/
        getRowDefinition(idx: number): RowColumnDefinition;
        /**Adds a GraphObject to the Panel's list of elements at the specified index.
        * @param {number} index
        * @param {GraphObject} element A GraphObject.*/
        insertAt(index: number, element: GraphObject);
        /**Removes a GraphObject from this Panel's list of elements.
        * @param {GraphObject} element A GraphObject.*/
        remove(element: GraphObject);
        /**Removes an GraphObject from this Panel's list of elements at the specified index.
        * @param {number} idx*/
        removeAt(idx: number);
        /**Removes the RowColumnDefinition for a particular row in this Table Panel.
        * @param {number} idx the non-negative zero-based integer row index.*/
        removeColumnDefinition(idx: number);
        /**Removes the RowColumnDefinition for a particular row in this Table Panel.
        * @param {number} idx the non-negative zero-based integer row index.*/
        removeRowDefinition(idx: number);
        /**Re-evaluate all data bindings on this panel, in order to assign new property values to the GraphObjects in this visual tree based on this this object's #data property values.
        * @param {string=} srcprop An optional source data property name:
        *   when provided, only evaluates those Bindings that use that particular property;
        *   when not provided or when it is the empty string, all bindings are evaluated.
        */
        updateTargetBindings(srcprop?: string);
        /**This value for #type resizes the main element to fit around the other elements; the main element is the first GraphObject with GraphObject#isPanelMain set to true, or else the first GraphObject if none have that property set to true.*/
        static Auto: EnumValue;
        /**This value for #type is used to draw regular patterns of lines.*/
        static Grid: EnumValue;
        /**This value for #type lays out the elements horizontally with their GraphObject#alignment property dictating their alignment on the Y-axis.*/
        static Horizontal: EnumValue;
        /**This value for #type is used for Links and adornments that act as Links.*/
        static Link: EnumValue;
        /**The default #type arranges each element according to their GraphObject#position.*/
        static Position: EnumValue;
        /**This value for #type arranges GraphObjects about a main element using the GraphObject#alignment and GraphObject#alignmentFocus properties; the main element is the first GraphObject with GraphObject#isPanelMain set to true, or else the first GraphObject if none have that property set to true.*/
        static Spot: EnumValue;
        /**This value for #type arranges GraphObjects into rows and columns; set the GraphObject#row and GraphObject#column properties on each element.*/
        static Table: EnumValue;
        /**Organizational Panel type that is only valid inside of a Table panel.*/
        static TableColumn: EnumValue;
        /**Organizational Panel type that is only valid inside of a Table panel.*/
        static TableRow: EnumValue;
        /**This value for #type lays out the elements vertically with their GraphObject#alignment property dictating their alignment on the X-axis.*/
        static Vertical: EnumValue;
        /**This value for #type rescales a single GraphObject to fit inside the panel depending on the element's GraphObject#stretch property.*/
        static Viewbox: EnumValue;
    }
    /**
    * This is the base class for all user-manipulated top-level objects.
    * Because it inherits from Panel}, it is automatically a visual container
    * of other GraphObject}s.
    * Because it thus also inherits from GraphObject}, it also has properties such as
    * GraphObject#actualBounds}, GraphObject#contextMenu}, and GraphObject#visible}.
    */
    class Part extends Panel {
        /**The constructor builds an empty Part.
         * @param {EnumValue=} type if not supplied, the default Panel type is Panel#Position.
        */
        constructor(type?: EnumValue);
        /**Gets an iterator over all of the Adornments associated with this part.*/
        adornments: Iterator;
        /**Gets or sets the category of this part, typically used to distinguish different kinds of nodes or links.*/
        category: string;
        /**Gets or sets the Group of which this Part or Node is a member.*/
        containingGroup: Group;
        /**Gets or sets the function that is called after this Part has changed which Group it belongs to, if any.*/
        containingGroupChanged: any;
        /**Gets or sets whether the user may copy this part.*/
        copyable: boolean;
        /**Gets or sets whether the user may delete this part.*/
        deletable: boolean;
        /**Gets the Diagram that this Part is in.*/
        diagram: Diagram;
        /**Gets or sets the function used to determine the location that this Part can be dragged to.*/
        dragComputation: (a:Part, b:Point, c:Point)=>Point;
        /**Gets or sets whether the user may group this part to be a member of a new Group.*/
        groupable: boolean;
        /**Gets or sets whether this Part is part of the document bounds.*/
        isInDocumentBounds: boolean;
        /**Gets or sets whether a Layout positions this Node or routes this Link.*/
        isLayoutPositioned: boolean;
        /**Gets or sets whether this Part is selected.*/
        isSelected: boolean;
        /**Gets or sets whether this part will draw shadows.*/
        isShadowed: boolean;
        /**Gets whether this part is not member of any Group node nor is it a label node for a Link.*/
        isTopLevel: boolean;
        /**Gets the Layer that this Part is in.*/
        layer: Layer;
        /**Gets or sets the function to execute when this part changes layers.*/
        layerChanged: (a:Part, b:Layer, c:Layer)=>any;
        /**Gets or sets the layer name for this part.*/
        layerName: string;
        /**Gets or sets flags that control when the Layout that is responsible for this Part is invalidated.*/
        layoutConditions: number;
        /**Gets or sets the position of this part in document coordinates, based on the #locationSpot in this part's #locationObject.*/
        location: Point;
        /**Gets the GraphObject that determines the location of this Part.*/
        locationObject: GraphObject;
        /**Gets or sets the name of the GraphObject that provides the location of this Part.*/
        locationObjectName: string;
        /**Gets or sets the location Spot of this Node, the spot on the #locationObject that is used in positioning this part in the diagram.*/
        locationSpot: Spot;
        /**Gets or sets the maximum location of this Part to which the user may drag using the DraggingTool.*/
        maxLocation: Point;
        /**Gets or sets the minimum location of this Part to which the user may drag using the DraggingTool.*/
        minLocation: Point;
        /**Gets or sets whether the user may move this part.*/
        movable: boolean;
        /**Gets or sets whether the user may reshape this part.*/
        reshapable: boolean;
        /**Gets or sets whether the user may resize this part.*/
        resizable: boolean;
        /**Gets or sets the adornment template used to create a resize handle Adornment for this part.*/
        resizeAdornmentTemplate: Adornment;
        /**Gets or sets the width and height multiples used when resizing.*/
        resizeCellSize: Size;
        /**Gets the GraphObject that should get resize handles when this part is selected.*/
        resizeObject: GraphObject;
        /**Gets or sets the name of the GraphObject that should get a resize handle when this part is selected.*/
        resizeObjectName: string;
        /**Gets or sets whether the user may rotate this part.*/
        rotatable: boolean;
        /**Gets or sets the adornment template used to create a rotation handle Adornment for this part.*/
        rotateAdornmentTemplate: Adornment;
        /**Gets the GraphObject that should get rotate handles when this part is selected.*/
        rotateObject: GraphObject;
        /**Gets or sets the name of the GraphObject that should get a rotate handle when this part is selected.*/
        rotateObjectName: string;
        /**Gets or sets whether the user may select this part.*/
        selectable: boolean;
        /**Gets or sets whether a selection adornment is shown for this part when it is selected.*/
        selectionAdorned: boolean;
        /**Gets or sets the Adornment template used to create a selection handle for this Part.*/
        selectionAdornmentTemplate: Adornment;
        /**Gets or sets the function to execute when this part is selected or deselected.*/
        selectionChanged: (p:Part)=>any;
        /**Gets the GraphObject that should get a selection handle when this part is selected.*/
        selectionObject: GraphObject;
        /**Gets or sets the name of the GraphObject that should get a selection handle when this part is selected.*/
        selectionObjectName: string;
        /**Gets or sets the numerical value that describes the shadow's blur.*/
        shadowBlur: number;
        /**Gets or sets the CSS string that describes a shadow color.*/
        shadowColor: string;
        /**Gets or sets the X and Y offset of this part's shadow.*/
        shadowOffset: Point;
        /**Gets or sets a text string that is associated with this part.*/
        text: string;
        /**Gets or sets whether the user may do in-place text editing on TextBlocks in this part that have TextBlock#editable set to true.*/
        textEditable: boolean;
        /**Associate an Adornment with this Part, perhaps replacing any existing adornment.
        * @param {string} category a string identifying the kind or role of the given adornment for this Part.
        * @param {Adornment} ad*/
        addAdornment(category: string, ad: Adornment);
        /**This predicate returns true if #copyable is true, if the layer's Layer#allowCopy is true, and if the diagram's Diagram#allowCopy is true.*/
        canCopy(): boolean;
        /**This predicate returns true if #deletable is true, if the layer's Layer#allowDelete is true, and if the diagram's Diagram#allowDelete is true.*/
        canDelete(): boolean;
        /**This predicate returns true if #textEditable is true, if the layer's Layer#allowTextEdit is true, and if the diagram's Diagram#allowTextEdit is true.*/
        canEdit(): boolean;
        /**This predicate returns true if #groupable is true, if the layer's Layer#allowGroup is true, and if the diagram's Diagram#allowGroup is true.*/
        canGroup(): boolean;
        /**This predicate is called by Layout implementations to decide whether this Part should be positioned and might affect the positioning of other Parts.*/
        canLayout(): boolean;
        /**This predicate returns true if #movable is true, if the layer's Layer#allowMove is true, and if the diagram's Diagram#allowMove is true.*/
        canMove(): boolean;
        /**This predicate returns true if #reshapable is true, if the layer's Layer#allowReshape is true, and if the diagram's Diagram#allowReshape is true.*/
        canReshape(): boolean;
        /**This predicate returns true if #resizable is true, if the layer's Layer#allowResize is true, and if the diagram's Diagram#allowResize is true.*/
        canResize(): boolean;
        /**This predicate returns true if #rotatable is true, if the layer's Layer#allowRotate is true, and if the diagram's Diagram#allowRotate is true.*/
        canRotate(): boolean;
        /**This predicate returns true if #selectable is true, if the layer's Layer#allowSelect is true, and if the diagram's Diagram#allowSelect is true.*/
        canSelect(): boolean;
        /**Remove all adornments associated with this part.*/
        clearAdornments();
        /**Find an Adornment of a given category associated with this Part.
        * @param {string} category*/
        findAdornment(category: string): Adornment;
        /**Find the Group that contains both this part and another one.
        * @param {Part} other*/
        findCommonContainingGroup(other: Part): Group;
        /**Gets the top-level Part for this part, which is itself when #isTopLevel is true.*/
        findTopLevelPart(): Part;
        /**Invalidate the Layout that is responsible for positioning this Part.
        * @param {number=} condition the reason that the layout should be invalidated;
        * if this argument is not supplied, any value of #layoutConditions other than Part#LayoutNone
        * will allow the layout to be invalidated.*/
        invalidateLayout(condition: number);
        /**This predicate is true if this part is a member of the given Part, perhaps indirectly.
        * @param {Part} part*/
        isMemberOf(part: Part): boolean;
        /**This predicate is true if this Part can be seen.*/
        isVisible(): boolean;
        /**Move this part and any parts that are owned by this part to a new position.
        * @param {Point} newpos a new Point in document coordinates.*/
        move(newpos: Point);
        /**Remove any Adornment of the given category that may be associated with this Part.
        * @param {string} category a string identifying the kind or role of the given adornment for this Part.
        */
        removeAdornment(category: string);
        /**This is responsible for creating any selection Adornment (if this Part #isSelected) and any tool adornments for this part.*/
        updateAdornments();
        /**Re-evaluate all data bindings on this Part, in order to assign new property values to the GraphObjects in this visual tree based on this this object's #data property values.
        * @param {string=} srcprop An optional source data property name:
        *   when provided, only evaluates those Bindings that use that particular property;
        *   when not provided or when it is the empty string, all bindings are evaluated.*/
        updateTargetBindings(srcprop?: string);
        /**This flag may be combined with other "Layout" flags as the value of the Part#layoutConditions property to indicate that when a Part is added to a Diagram or Group, it invalidates the Layout responsible for the Part.*/
        LayoutAdded: number;
        /**This flag may be combined with other "Layout" flags as the value of the Part#layoutConditions property to indicate that when a Group has been laid out, it invalidates the Layout responsible for that Group; this flag is ignored for Parts that are not Groups.*/
        LayoutGroupLayout: number;
        /**This flag may be combined with other "Layout" flags as the value of the Part#layoutConditions property to indicate that when a Part's GraphObject#visible becomes false, it invalidates the Layout responsible for the Part.*/
        LayoutHidden: number;
        /**This flag may be combined with other "Layout" flags as the value of the Part#layoutConditions property to indicate that when a Part's GraphObject#actualBounds changes size, it invalidates the Layout responsible for the Part; this flag is ignored for Parts that are Links.*/
        LayoutNodeSized: number;
        /**This value may be used as the value of the Part#layoutConditions property to indicate that no operation on this Part causes invalidation of the Layout responsible for this Part.*/
        LayoutNone: number;
        /**This flag may be combined with other "Layout" flags as the value of the Part#layoutConditions property to indicate that when a Part is removed from a Diagram or Group, it invalidates the Layout responsible for the Part.*/
        LayoutRemoved: number;
        /**This flag may be combined with other "Layout" flags as the value of the Part#layoutConditions property to indicate that when a Part's GraphObject#visible becomes true, it invalidates the Layout responsible for the Part.*/
        LayoutShown: number;
        /**This is the default value for the Part#layoutConditions property: the Layout responsible for the Part is invalidated when the Part is added or removed from the Diagram or Group or when it changes visibility or size or when a Group's layout has been performed.*/
        LayoutStandard: number;
        ensureBounds();
    }
    /**
    * A Picture is a GraphObject that shows an image, video-frame, or Canvas element.
    * You can specify what to show by either setting the #source URL property
    * to a URL string or the #element property to an HTMLImageElement,
    * HTMLCanvasElement, or HTMLVideoElement.
    */
    class Picture extends GraphObject {
        /**The constructor creates a picture that shows nothing until the #source or #element is specified.*/
        constructor();
        /**Gets or sets the Picture's HTML element.*/
        element: HTMLElement;
        /**Gets or sets the function to call if an image fails to load.*/
        errorFunction: (a:Picture, b:Event)=>any;
        /**Gets or sets how the Picture's image is stretched within its bounding box.*/
        imageStretch: EnumValue;
        /**Gets the natural size of this picture as determined by its source's width and height.*/
        naturalBounds: Rect;
        /**Gets or sets the Picture's source URL, which can be any valid image (png, jpg, gif, etc) URL.*/
        source: string;
        /**Gets or sets the rectangular area of the source image that this picture should display.*/
        sourceRect: Rect;
    }
    /**
    * If a Placeholder is in the visual tree of a Group, it represents the area of all of the member Parts of that Group.
    * If a Placeholder is in the visual tree of an Adornment, it represents the area of the Adornment#adornedObject.
    * It can only be used in the visual tree of a Group node or an Adornment.
    * There can be at most one Placeholder in a Group or an Adornment.
    */
    class Placeholder extends GraphObject {
        constructor();
        padding: any;
    }
    /**
    * The RowColumnDefinition class describes constraints on a row or a column
    * in a Panel of type Panel#Table.
    * It also provides information about the actual layout after the
    * Table Panel has been arranged.
    */
    class RowColumnDefinition {
        /**You do not need to use this constructor, because calls to Panel#getRowDefinition or Panel#getColumnDefinition will automatically create and remember a RowColumnDefinition for you.*/
        constructor();
        /**Gets the usable row height or column width, after arrangement, that objects in this row or column can be placed within.*/
        actual: number;
        /**Gets or sets a default alignment for elements that are in this row or column.*/
        alignment: Spot;
        /**Gets or sets the background color for a particular row or column, which fills the entire span of the column, including any separatorPadding.*/
        background: any;
        /**Determines whether or not the background, if there is one, is in front of or behind the separators.*/
        coversSeparators: boolean;
        /**Gets or sets the row height.*/
        height: number;
        /**Gets which row or column this RowColumnDefinition describes in the #panel.*/
        index: number;
        /**Gets whether this describes a row or a column in the #panel.*/
        isRow: boolean;
        /**Gets or sets the maximum row height or column width.*/
        maximum: number;
        /**Gets or sets the minimum row height or column width.*/
        minimum: number;
        /**Gets the Panel that this row or column definition is in.*/
        panel: Panel;
        /**Gets the actual arranged row or column starting position, after arrangement.*/
        position: number;
        /**Gets or sets the dash array for dashing the spacing provided this row or column has a nonzero RowColumnDefinition#separatorStrokeWidth and non-null RowColumnDefinition#separatorStroke.*/
        separatorDashArray: Array;
        /**Gets or sets the additional padding for a particular row or column.*/
        separatorPadding: Margin;
        /**Gets or sets the stroke (color) for a particular row or column, provided that row or column has a nonzero RowColumnDefinition#separatorStrokeWidth.*/
        separatorStroke: any;
        /**Gets or sets the stroke width for a particular row or column's separator,*/
        separatorStrokeWidth: number;
        /**Gets or sets how this row or column deals with a Table Panel's extra space.*/
        sizing: EnumValue;
        /**Gets or sets the default stretch for elements that are in this row or column.*/
        stretch: EnumValue;
        /**Gets the total arranged row height or column width, after arrangement.*/
        total: number;
        /**Gets or sets the column width.*/
        width: number;
        /**Add a data-binding of a property on this object to a property on a data object.
        * @param {Binding} binding*/
        bind(binding: Binding);
        /**The default #sizing, which resolves to RowColumnDefinition#None or else the Table Panel's rowSizing and columnSizing if present.*/
        static Default: EnumValue;
        /**The default #sizing if none is specified on the Table Panel's rowSizing and columnSizing.*/
        static None: EnumValue;
        /**If a Table Panel is larger than all the rows then this #sizing grants this row and any others with the same value the extra space, apportinoed proportionally between them*/
        static ProportionalExtra: EnumValue;
    }
    /**
    * A Shape is a GraphObject that shows a geometric figure.
    * The Geometry determines what is drawn;
    * the properties #fill and #stroke
    * (and other stroke properties) determine how it is drawn.
    */
    class Shape extends GraphObject {
        /**A newly constructed Shape has a default #figure of "None", which constructs a rectangular geometry, and is filled and stroked with a black brush.*/
        constructor();
        /**Gets or sets the figure name, used to construct a Geometry.*/
        figure: string;
        /**Gets or sets the Brush or string that describes the fill of the Shape.*/
        fill: any;
        /**Gets or sets the name of the kind of arrowhead that this shape should take when this shape is an element of a Link.*/
        fromArrow: string;
        /**Gets or sets the Shape's Geometry that defines the Shape's figure.*/
        geometry: Geometry;
        /**Gets or sets how the shape's geometry is proportionally created given its computed size.*/
        geometryStretch: EnumValue;
        /**When set, creates a Geometry and normalizes it from a given path string, then sets the Geometry on this Shape and offsets the GraphObject#position by an appropriate amount.*/
        geometryString: string;
        /**Gets or sets how frequently this shape should be drawn within a Grid Panel, in multiples of the Panel#gridCellSize.*/
        interval: number;
        /**Gets or sets the whether the #position denotes the panel coordinates of the geometry or of the stroked area.*/
        isGeometryPositioned: boolean;
        /**Gets the natural bounds of this Shape as determined by its #geometry's bounds.*/
        naturalBounds: Rect;
        /**Gets or sets a property for parameterizing the construction of a Geometry from a figure.*/
        parameter1: number;
        /**Gets or sets a property for parameterizing the construction of a Geometry from a figure.*/
        parameter2: number;
        /**Gets or sets the top-left Spot used by some Panels for determining where in the shape other objects may be placed.*/
        spot1: Spot;
        /**Gets or sets the bottom-right Spot used by some Panels for determining where in the shape other objects may be placed.*/
        spot2: Spot;
        /**Gets or sets the Brush or string that describes the stroke of the Shape.*/
        stroke: any;
        /**Gets or sets the style for the stroke's line cap.*/
        strokeCap: string;
        /**Gets or sets the dash array for creating dashed lines.*/
        strokeDashArray: Array;
        /**Gets or sets the offset for dashed lines, used in the phase pattern.*/
        strokeDashOffset: number;
        /**Gets or sets the type of corner that will be drawn when two lines meet.*/
        strokeJoin: string;
        /**Gets or sets the style for the stroke's mitre limit ratio.*/
        strokeMiterLimit: number;
        /**Gets or sets a stroke's width.*/
        strokeWidth: number;
        /**Gets or sets the name of the kind of arrowhead that this shape should take when this shape is an element of a Link.*/
        toArrow: string;
    }
    /**
    * A TextBlock is a GraphObject that displays a #text string in a given #font.
    */
    class TextBlock extends GraphObject {
        /**A newly constructed TextBlock has no string to show; if it did, it would draw the text, wrapping if needed, in the default font using a black stroke.*/
        constructor();
        /**Gets or sets whether or not this TextBlock allows in-place editing of the #text string by the user with the help of the TextEditingTool.*/
        editable: boolean;
        /**Gets or sets the function to call if a text edit made with the TextEditingTool is invalid.*/
        errorFunction: (a:TextEditingTool, b:string, c:string)=>any;
        /**Gets or sets the current font settings.*/
        font: string;
        /**Gets or sets whether or not the text allows or displays multiple lines or embedded newlines.*/
        isMultiline: boolean;
        /**Gets or sets whether or not the text is underlined.*/
        isUnderline: boolean;
        /**Gets or sets whether or not the text has a strikethrough line (line-through).*/
        isStrikethrough: boolean;
        /**Gets the total number of lines in this TextBlock, including lines created from returns and wrapping.*/
        lineCount: number;
        /**Gets the natural bounds of this TextBlock in local coordinates, as determined by its #font and #text string.*/
        naturalBounds: Rect;
        /**Gets or sets the Brush or string that describes the stroke (color) of the #font.*/
        stroke: any;
        /**Gets or sets the current text string.*/
        text: string;
        /**Gets or sets the current text alignment property.*/
        textAlign: string;
        /**Gets or sets the HTMLElement that this TextBlock uses as its text editor in the TextEditingTool.*/
        textEditor: HTMLElement;
        /**Gets or sets the predicate that determines whether or not a string of text is valid.*/
        textValidation: any;
        /**Gets or sets whether the text should be wrapped if it is too long to fit on one line.*/
        wrap: EnumValue;
        /**The TextBlock will not wrap its text.*/
        static None: EnumValue;
        /**The TextBlock will wrap text and the width of the TextBlock will be the desiredSize's width, if any.*/
        static WrapDesiredSize: EnumValue;
        /**The TextBlock will wrap text, making the width of the TextBlock equal to the width of the longest line.*/
        static WrapFit: EnumValue;
    }
    class EnumValue {
        //Rawr!
    }
}//END go
